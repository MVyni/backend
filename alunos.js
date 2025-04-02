const express = require("express");
const app = express();
const db = require("./dataBase")
const dbContext = db.AlunosDataBase()
app.use(express.json());



app.get("/users", async (req, res) => {
    res.status(201).send(await dbContext.list());
})

//BY ID
app.get("/users/:id", async (req, res) => {
    res.status(201).send(await dbContext.get(req.params.id))
})

app.post("/users", async (req, res) => {
    res.status(201).send(await dbContext.insert(req.body))
})


app.put("/users/:id", async (req,res) => {
    res.status(201).send(await dbContext.update(req.body, req.params.id));
})

app.delete("/users/:id", async (req,res) => {
   
    res.status(201).send(await dbContext.del(req.params.id))
})

app.listen(3001, () => {
    console.log("entrando no servidor")
})