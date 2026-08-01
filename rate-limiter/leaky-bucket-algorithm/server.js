import express from "express"
import { LeakyBucket } from "./leaky-bucket.js"

const app = express()


const leakyBcket  = new LeakyBucket();

const rateLimitter = (req,res,next)=>{
    if(leakyBcket.allowRequest()){
        next()
    }
    else{
        return res.status(429).json({message:"Too many request"})
    }
}


app.use(rateLimitter);
app.get("/",(req,res)=>{
    res.send("hi i am rate limiter api ")
})

app.listen(3000,()=>{
    console.log("serevr is running at port 3000 ")
})