const express = require('express');
require('express-async-errors');
const rateLimit = require('express-rate-limit');
const path = require('path');
const app =express();
const routes = require('./src/routes/routes');
const PORT = 4000;

//Using express rate limitter for rate limiting
app.use(rateLimit({windowMs:15*1*1000,max:100}));

//Rendering static page for signup
app.use(express.static(path.join(__dirname,'/public/')));

//To parse body of HTML form
app.use(express.urlencoded({ extended: true }));

//To parse body of other requests
app.use(express.json());

//calling router module passing applicatopm
routes(app);

//Using Express error middleware
app.use(require('./Middleware/errorHandler'));

//Using default 404 Error if any Endpoints does not match
app.use((req,res)=>{
    res.status(404).json({status:"Not Found"});
});


//Handling Uncaught Exceptions
process.on('uncaughtException',(e)=>{
    console.log(e);
})

//Handling UnHandled Rejections
process.on('unhandledRejection',(e)=>{
    console.log(e);
})


//Listening to a specific PORT through Express
app.listen(PORT,()=>{
    console.log(`App is Listening to Port ${PORT}`);
})
