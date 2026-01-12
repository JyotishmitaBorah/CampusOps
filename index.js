const express= require("express");
const app=express();
app.use(express.json());
app.get("/",(requestAnimationFrame,res)=>{
    res.send("CampusOps backend is running");
});
app.listen(5000,()=>{
    console.log("Server started at port 5000");
});
app.post("/test",(req, res)=>{
    res.json({
        message:"Data received",
        data:req.body,
    });
});