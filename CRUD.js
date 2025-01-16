// create endpoint to perform CRUD Operation for studets with following attributes : UID , Name , Branch , Sem , Div , Rollno.
const express = require("express");
const app = express();
const port = 3000;

var student = {
    UID: "2259",
    Name: "AT",
    Branch: "CE",
    Sem: 5,
    Div: "A",
    Rollno: 55
}

app.get("/", (req, res) => res.json(student));
app.listen(port, () =>
  console.log(`Server Started at http://localhost:${port}!`)
);
