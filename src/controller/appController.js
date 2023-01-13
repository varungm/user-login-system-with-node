const mongoose = require('mongoose');
const {usersSchema,otpSchema} = require('../../Models/userModel');
const User = mongoose.model('User',usersSchema);
const Otp = mongoose.model('Otp',otpSchema);
const otpGenerator = require('../utility/index');
const EmailValidationSchema = require('../validation/index');
//const loginPage = require('../../public/login.html');

const signUp = (req,res)=>{
    let user = new User(req.body);
    user.save((err,data)=>{
        if(err){
            res.status(400).send(`<html>
            <head></head>
            <h1>Bad Request</h1>
        </html>`);
        }
        else{
            res.status(201).send(`<html>
            <head>Login Form</head>
            <body align="center"><br>
               <form  method="post" action="/generateOtp"><br>
                <input type="text" id="emailId" name="emailId" required>
                <input type="submit" value="GenerateOTP">
               </form>
            </body>
        </html>`);
        }
    })
};

const generateOtp = (req,res,next)=>{
    const email = req.body.emailId;
    const {error} = EmailValidationSchema.validate(req.body);
    if(error){
        let e = {Status:error.message};
        throw e; 
    }
    User.findOne({emailId:email},(err,data)=>{
        if(!data || err){
            let e = {Status:"Invalid Email"};
            next(e);
        }
        else{
            let OTP = otpGenerator();
            let otp = new Otp(OTP);
            console.log(OTP);
            otp.save((err,data)=>{
                if(err){
                    console.log(err);
                    res.status(400).send({Status:'Error Generating OTP Please try again later'});
                }
                else{
                    res.status(200).send(`<html>
                    <head>Login Form</head>
                    <body align="center"><br>
                       <form action="/logIn" method="post"><br>
                        <input type="test" id="emailId" name="emailId" value="${email}" required><br>
                        <input type="test" id="otpKey" name="otpKey" value="${OTP.otpKey}" required><br>
                        <input type="test" id="otpValue" name="otpValue" required>
                        <input type="submit" value="Login">
                       </form>
                    </body>
                </html>`);
                }
            })
        }
    })
    
}

const signIn = (req,res)=>{
    let otpkey = req.body.otpKey;
    let otpvalue = req.body.otpValue;
    User.findOne({'otpkey':otpkey,'otpvalue':otpvalue},(err,data)=>{
        if(err){
            res.status(400).send(`<html>
            <h1>Invalid OTP</h1>
          </body>
      </html>`);
        }
        else{
            res.status(200).send(`<html>
              <h1>Login Successful</h1>
            </body>
        </html>`);
        }
    })
}



module.exports = {signUp,signIn,generateOtp};

