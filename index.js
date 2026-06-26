const express = require("express")

const app = express();

let students = [
    { id: 1, name: "SATYAM", city: "GORAKHPUR"},
    { id: 2, name: "ALOK", city: "GKP"}
];

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API IS RUNNING");
});

app.get("/students",(req,res)=>{
    res.json({
        message:"ALL Atudents",
        data: students
    });
});

app.listen(3000,()=>{
    console.log("Server Started");
});