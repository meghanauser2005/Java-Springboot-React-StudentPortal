const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")


dotenv.config()
const app=express()
const port=5000

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB connected")
})
.catch((error)=>{
    console.log(error.message)
})


app.listen(port,()=>{
    console.log(`server running at ${port}`)
})