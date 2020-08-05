const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

// Libera o servidor para que qualquer
// um possa acessar
app.use(cors())

app.get('/', async(req, res) => {
    try {
        // A resposta do axios é response
        // Aqui eu tiro o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        // return res.json([
        //{name: "Iago Dalmolin"},
        //{name: "Mayk Brito"}
        //])
        return res.json(data)

    } catch (error) {
        console.error(error)
    }
})

app.listen('4567')