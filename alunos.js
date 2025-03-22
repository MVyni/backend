const express = require("express");
const app = express();

app.use(express.json());
let data = [];

app.get("/users", (req, res) => {
    console.log("entrou no get")
    res.status(201).send(data);
})

app.get("/users/:id", (req, res) => {
    console.log("entrou no get by id")
    let idParams = req.params.id
    let index = data.findIndex((item) => item.id === idParams)

    let newData = data[index]
    res.status(201).send(newData)
})

app.post("/users", (req, res) => {
    console.log("entrou no post")
    let newBody = req.body
    data.push(newBody)

    res.status(201).send(data)
})




app.listen(3001, () => {
    console.log("entrando no servidor")
})