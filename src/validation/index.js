const Joi = require('joi');

//Using JOI validator for Schema validation
const EmailValidationSchema = Joi.object({
    emailId : Joi.string().min(1).max(50).pattern(/^[0-9a-zA-Z\@\.]+$/).required()
});

//Exporting the JOI validator object
module.exports = EmailValidationSchema;