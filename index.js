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

//Data 

app.get("/students",(req,res)=>{
    res.json({
        message:"ALL Atudents",
        data: students
    });
});

app.post("/students",(req,res)=>{
    const {id, name, city } = req.body;
    const newStudent = { id, name, city };
    students.push(newStudent);
    res.json({
        message:"Record Added",
        student:newStudent,
        data:students 
    })
});

//Data Update
app.put("/studens/:id",(req,res) => {
    const { id } = req.params;

    const student = students.find(s => s.id ==id);
    if(!student)
    {
        return res.status(404).json({
            message:"Student Not Found"
        });
    }
    student.name = req.body.name;
    student.city = req.body.city;

    res.json({
        message:"Record updated",
        student
    });
})

app.delete("/students/:id", (req, res)=> {
    const id = req.params.id;
    const student =students.find(s => s.id == id);
    if (!student) {
        return res.status(404).json({message: "Invalid ID"});

    }
    students = students.filter(s => s.id !=id);
    res.json({
        message:"Record Deleted",
        students
    })
});

app.listen(3000,()=>{
    console.log("Server Started");
});