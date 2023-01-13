const mongoose = require('mongoose');
const MONGODB_IP='127.0.0.1';
const MONGODP_PORT=27017;
const MONGODB_NAME='users';
mongoose.connect(`mongodb://${MONGODB_IP}:${MONGODP_PORT}/${MONGODB_NAME}`);

const db = mongoose.connection;

db.on('open',()=>{
    console.log('Connected to Mongo DB Database');
})

db.on('error',()=>{
    console.log('Error connecting to Mongo DB Database');
})
