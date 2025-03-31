const express = require("express");
const app = express();
app.use(express.json());

let veiculos = [{
    "id": "1",
    "carro": "evoque",
    "ano": "2021",
    "valor": "500.000"
}];


app.get("/veiculos", (req, res) => {
    res.status(201).send({carros: veiculos})
})

app.get("/veiculos/:id", (req, res) => {
    const veiculoId = req.params.id
    const index = veiculos.findIndex((item) => item.id === veiculoId)
    
    res.status(201).send(veiculos[index])
})

app.post("/veiculos", (req, res) => {
    veiculos.push(req.body)

    res.status(201).send({carros: veiculos});
})

app.post("/veiculos/:id", (req, res) => {
    const veiculoId = req.params.id
    const index = veiculos.findIndex((item) => item.id === veiculoId)
    veiculos[index] = req.body
    
    res.status(201).send({carros: veiculos})
})

app.delete("/veiculos/:id", (req, res) => {
    const veiculoId = req.params.id
    const index = veiculos.findIndex((item) => item.id === veiculoId)
    veiculos.splice(index, 1)
    
    res.status(201).send({carros: veiculos})
})


app.listen(3000, () => {
    console.log("entrando no sistema de carros")
})