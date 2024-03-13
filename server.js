
const express = require("express");
const app = express();
require('dotenv').config();

const db =require("./db/db");

const bodyParser = require("body-parser");
app.use(bodyParser.json({ type: 'application/*+json' }));


app.get("/",(req,res)=>{
    res.send("server jinda hai");
});





app.listen(3000,()=>{
    console.log(`server listen on: http://localhost:3000`);
});