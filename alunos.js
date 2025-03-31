const express = require("express");
const app = express();

app.use(express.json());
let data = [];

app.get("/users", (req, res) => {
    console.log("entrou no get")
    res.status(201).send({alunos: data});
})

app.get("/users/:id", (req, res) => {
    console.log("entrou no get by id")
    let idParams = req.params.id
    let index = data.findIndex((item) => item.id === idParams)

    let newData = data[index]
    res.status(201).send({alunos: newData})
})

app.post("/users", (req, res) => {
    console.log("entrou no post")
    let newBody = req.body
    data.push(newBody)

    res.status(201).send({alunos: data})
})


app.put("/users/:id", (req,res) => {
    console.log("entrando no put");
    const alunoId = req.params.id;
    let index = data.findIndex((item) => item.id === alunoId)
    
    data[index] = req.body

    res.status(201).send({aluno: data[index] = req.body});
})

app.delete("/users/:id", (req,res) => {
    console.log("entrando no delete");
    
    const alunoId = req.params.id
    let index = data.findIndex((aluno) => aluno.id === alunoId)

    data.splice(index, 1)

    res.status(201).send({alunos: data})
})

app.listen(3001, () => {
    console.log("entrando no servidor")
})