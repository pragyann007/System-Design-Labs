import express from "express"

const app = express()


app.get("/",(req,res)=>{
    res.send("hi i am rate limiter api ")
})

app.listen(3000,()=>{
    console.log("serevr is running at port 3000 ")
})