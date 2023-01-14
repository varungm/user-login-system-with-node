const mongoose = require('mongoose');
const MONGODB_IP='127.0.0.1';
const MONGODP_PORT=27017;
const MONGODB_NAME='users';

//Connecting to Mongo DB Database
mongoose.connect(`mongodb://${MONGODB_IP}:${MONGODP_PORT}/${MONGODB_NAME}`);

//Getting Mongo DB connection
const db = mongoose.connection;

//Listening to 'on' event of DB connection to check if DB is connected
db.on('open',()=>{
    console.log('Connected to Mongo DB Database');
})

//Listening to 'Error' event if there is any error connecting to DB
db.on('error',()=>{
    console.log('Error connecting to Mongo DB Database');
})
