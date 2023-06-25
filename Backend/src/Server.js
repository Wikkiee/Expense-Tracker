import express from "express"

const App = express();

App.get("/",(req,res)=>{
    res.write("Hello world")
})

App.get("/login",(req,res)=>{
    res.write("Loggin")
})
App.post("")

App.listen(3000,(err)=>{
    if(err){
        throw err
    }else{
        console.log("Server running on port 3000");
    }
})