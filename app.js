import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import router from "./src/route.js";


let URI = process.env.URI
const app = express()
app.use(express.json())



mongoose.connect(URI)
.then(()=>console.log(`connected to DB`))
.catch((err)=>console.log(err))
app.use('/',router)



app.listen(process.env.PORT,()=>console.log(`server on ${process.env.PORT}`))
