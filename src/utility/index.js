//Creating OTP Generator function
const otpGenerator = ()=>{
    const OTP_KEY = Math.ceil(Date.now() +(1000+ Math.random()*9000));
    const OTP_VALUE = Math.ceil(100000+(Math.random()*900000));
    return {'otpKey':OTP_KEY,'otpValue':OTP_VALUE};
}

//Exporting OTP Generator
module.exports = otpGenerator;

