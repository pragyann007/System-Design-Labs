import express from "express"
import { TockenBucket } from "./good-approach-limitter.js";
import { BadTockenBucket } from "./bad-approach-limiter.js";

const app = express()

const badtokenBucket = new BadTockenBucket(5,1);

setInterval(() => {
    badtokenBucket.refill();
    
}, 1000);
const tokenBucket = new TockenBucket(5,1)


const badrateLimiter =  (req,res,next)=>{

    if(badtokenBucket.allowRequest()){
        next()
    }
    else{
        return res.status(429).json({message:"Too many request"})
    }

}


const goodrateLimitter = (req,res,next)=>{

    if(tokenBucket.allowRequest()){
        next()
    }
    else{
        return res.status(429).json({message:"Too many request"})
    }

}

app.use(goodrateLimitter)

app.get("/",(req,res)=>{
    let sum = 0 ; 

    for(let i = 0 ;i<10000;i++){
        sum = sum + i ; 

    }
    res.send("hi i am rate limiter api "+sum)
})

app.listen(3000,()=>{
    console.log("serevr is running at port 3000 ")
})