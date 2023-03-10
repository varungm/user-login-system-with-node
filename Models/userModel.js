const mongoose = require('mongoose');
require('../database/index')
const Schema = mongoose.Schema;

//Creating user Schema
let usersSchema = Schema({
    firstName : {type:String,required:true},
    lastName : {type:String,require:true},
    gender : {type:String,required:true},
    emailId : {type:String,require:true},
    phoneNumber : {type:Number,required:true}
});

//Creating otp Schema
let otpSchema = Schema({
    otpKey : {type:Number,required:true},
    otpValue:{type:Number,required:true}
})

//Expoting schemas
module.exports = {usersSchema,otpSchema};