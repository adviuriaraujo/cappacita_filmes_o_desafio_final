const express = require ('express')
const app = express()
const db = require('./src/model/database/db')
const bodyParser = require ('body-parser')
const cors = require('cors')
const film = require('./src/model/filmeAPI')
require("dotenv").config({ path: "./.env" })


app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(express.json())

app.get('/', async (req, res) => {
    res.sendFile('index.html', { root:__dirname })
})

app.get('/discover', async (req, res) => {
    res.send(await film.discover())
})

app.get('/list/:id', async (req, res) => {
    res.send(await film.lista(req.params.id))
})

app.get('/movie/:id', async (req, res) => {
    res.send(await film.movie(req.params.id))
})

app.get('/exibir', async (req, res) =>{
    res.send(await db.exibir())
})

app.post('/submit', async (req, res) => {
    const data = await db.inserir({
        nome: req.body.nome,
        comment: req.body.comment
    })
    res.send(data)
})


app.listen(process.env.PORT)