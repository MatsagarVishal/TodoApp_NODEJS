const mongoose = require("mongoose");
const dbURL = process.env.url;
require('dotenv').config();

mongoose.connect(process.env.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('connected',()=>{
    console.log("Database is connected....!!");
});
db.on('error',(error)=>{
    console.log("Some error occured during building connection with database....");
    console.log(error);
});
db.on('disconnected',()=>{
    console.log("Database Server is Disconnected..!!");
});


module.exports =db;
