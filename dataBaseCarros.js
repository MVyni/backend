const delay = (time) => 
    new Promise (resolve => setTimeout(resolve, time));


const CarrosDataBase = (() => {
    let idSequence = 1
    const carros = []
    const insert = async (carro) => {
        await delay(400)
        const id = idSequence++
        const data = {...carro, id}
        carros[id] = data
        return data;
    }

    const list = async () => {
        await delay(500)
        return Object.values(carros)
    }

    const get = async (id) => {
        await delay(200)
        return carros[id]
    }

    const update = async (carro, id) => {
        await delay(300)
        carros[id] = {...carro, id}
        return carro
    }

    const del = async (id) => {
        await delay(400)
        delete carros[id]
    }

    return {
        insert,
        list,
        get,
        update,
        del,
    }
})

module.exports = { CarrosDataBase }