const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => res.send("HELLO"));

app.get("/uid", (req, res) => res.send("55"));
app.get("/clg", (req, res) => res.send("RKU"));

app.get("/Sname", (req, res) => res.send("AT"));
app.listen(port, () => console.log(`Server is running on port ${port}`));

//create endpoint which will display studentname,university,clg