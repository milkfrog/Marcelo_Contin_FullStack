const port = process.env.PORT || 4002
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const numberFunctions = require('./service/numberFunctions')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "client", "build")))

app.get('/divisores', (req, res) => {
    const url = 'http://localhost:4001/valores'
    axios.get(url).then(response => {
        res.send(response.data)
    }).catch(() => res.send('error'))
})



app.post('/divisores', (req, res) => {
    const url = 'http://localhost:4001/valores'
    console.log(req.body.number)
    const object = numberFunctions.verifyNumber(req.body.number) 
    console.log(object)
    axios.post(url, object).then(response => {
        res.send(object)
    }).catch(() => res.send('error'))
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => console.log(`Servidor rodando e escutando na porta ${port}`))