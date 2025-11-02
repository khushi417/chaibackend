// require ('dotenv').config({path:'./env'})
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
import connectDB from "./db/index.js"

import dotenv from 'dotenv'

dotenv.config({ path: './env' })


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000),()=>{
        console.log(`app running http://localhost${process.env.PORT}`);
    }
})
.catch((err)=>{
    console.log("MOngo DB connection failed ",err)
})











/*
import express from "express"
const app=express()
// function connectDB(){}
// connecrDB()

// ()() ife hamra function ko immediately execute krdo js function

// semicolon taki kyi baar joo pehla code pr semicolon na lagyaa hooo 
;( async () => {
    try{
        await mongoose.connect(`${process.env.mongodb_url}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Not avaliable to talk")
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is running on  http://localhost${process.env.PORT}`);
        })
    }
    catch(error){
        console.log("Error: ",error);
        throw error;
        
    }
} )()  */