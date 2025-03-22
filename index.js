const express = require("express");
const app = express();

app.use(express.json());

app.get("/alunos", (req,res)  => {
    console.log(req.query);
    console.log("entrou nos alunos");
    res.status(201).send("entrou no get")
})

app.get("/alunos/:id/:outros", (req, res) => {
    console.log(req.params.id);
    console.log(req.params.outros);
    res.status(201).send("entrou no get por id")
})

app.post("/alunos", (req, res) => {
    console.log(req.body);
    console.log("entrou no post");
    res.status(201).send(req.body)
})

app.listen(3000, () => {
    console.log("iniciando servidor")
})