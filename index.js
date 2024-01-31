//Loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors=require('cors')
const router=require('./Routes/routes')
require('./DB/connection')

const pfServer=express(); // Creates server 

pfServer.use(cors());
pfServer.use(express.json())
pfServer.use(router)


const PORT =3000;

pfServer.listen(PORT,()=>{
    console.log(`Project server started at Port: ${PORT}`);// this is for hosting
});

pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style=color:red;>Project fair Server Started !!! Waiting for Client Request...</h1>`)
}) // route for root element


//This code sets up an Express server, includes CORS support, JSON parsing middleware, 
//and uses the custom router defined in ./Routes/routes to handle routes. It listens on 
//port 3000 and has a root route for a welcome message.