const Joi = require('joi');

const EmailValidationSchema = Joi.object({
    emailId : Joi.string().min(1).max(50).pattern(/^[0-9a-zA-Z\@\.]+$/).required()
});

module.exports = EmailValidationSchema;