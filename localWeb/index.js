const express=require("express");
const app=express();
const port=4000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});
app.get("/",(req,res)=>{
    res.send("Hello World");
});