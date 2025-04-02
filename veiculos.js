const express = require("express");
const app = express();
const db = require("./dataBaseCarros")
const dbContext = db.CarrosDataBase()
app.use(express.json());


app.get("/veiculos", async (req, res) => {
    res.status(201).send(await dbContext.list())
})

//BY ID
app.get("/veiculos/:id", async (req, res) => {
    const veiculoId = req.params.id
    res.status(201).send(await dbContext.get(veiculoId))
})

app.post("/veiculos", async (req, res) => {
    res.status(201).send(await dbContext.insert(req.body));
})

app.put("/veiculos/:id", async (req, res) => {

    res.status(201).send(await dbContext.update(req.body, req.params.id))
})

app.delete("/veiculos/:id", async (req, res) => {
    res.status(201).send(await dbContext.del(req.params.id))
})


app.listen(3000, () => {
    console.log("entrando no sistema de carros")
})