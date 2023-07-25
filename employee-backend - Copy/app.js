const express=require('express')
const mongooe =require('mongoose')
const morgan = require('morgan')
const cors =require('cors')
const app=express();
const jwt =require("jsonwebtoken");
require('dotenv').config();
app.use(morgan("dev"));
app.use(cors());
require("./db/mongodb");



const user=require('./routes/UserRoute');

app.use('/api',user)
const employee=require('./routes/Employee');

app.use('/api',employee)
const PORT=process.env.PORT;
app.listen(5000,()=>{
    console.log(`sERVER RUNNING ON port 5000`);
});