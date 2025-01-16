// create endpoint to perform CRUD Operation for studets with following attributes : UID , Name , Branch , Sem , Div , Rollno.
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

var student =[ {
    UID: "2259",
    Name: "AT",
    Branch: "CE",
    Sem: 5,
    Div: "A",
    Rollno: 55
},
];

app.get("/", (req, res) => res.json(student));
app.post("/", (req, res) => {
    const {UID, Name, Branch, Sem, Div, Rollno} = req.body;
    student = [...student,{UID, Name, Branch, Sem, Div, Rollno}];
    res.json(student);
});
app.put("/:UID", (req, res) => {
    const UID = req.params.UID;
    const { Name, Branch, Sem, Div, Rollno} = req.body;
    student = student.map((student) =>
        
         (student.UID === UID ? {UID, Name, Branch, Sem, Div, Rollno} : student)); 
    res.json(student);    
});
app.listen(port, () =>
  console.log(`Server Started at http://localhost:${port}!`)
);
