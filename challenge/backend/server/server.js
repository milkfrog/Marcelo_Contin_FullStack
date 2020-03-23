const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const numberFunctions = require('../service/numberFunctions')
const cors = require('cors')

const app = express()
const port = 4002

// axios.default.timeout = 1

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

app.listen(port, () => console.log(`Servidor rodando e escutando na porta ${port}`))