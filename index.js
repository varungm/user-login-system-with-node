const express = require('express');
require('express-async-errors');
const rateLimit = require('express-rate-limit');
const path = require('path');
const app =express();
const routes = require('./src/routes/routes');
const PORT = 4000;

app.use(rateLimit({windowMs:15*1*1000,max:100}));

app.use(express.static(path.join(__dirname,'/public/')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.use(require('./Middleware/errorHandler'));

app.use((req,res)=>{
    res.status(404).json("Not Found");
});



process.on('uncaughtException',(e)=>{
    console.log(e);
})

process.on('unhandledRejection',(e)=>{
    console.log(e);
})

app.listen(PORT,()=>{
    console.log(`App is Listening to Port ${PORT}`);
})
