const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
const port = 4002

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Teste' })
})

app.post('/api/divisores', (req, res) => {
    let arrayDividers = []
    const number = parseInt(req.body.number)
    for (let i=1; i <= number/2; i++){
        if (number%i == 0) {
            arrayDividers.push(i)
        }
    }
    arrayDividers.push(number)
    console.log(number)
    console.log(arrayDividers)
    res.send(arrayDividers)
})

app.get('/api/teste', (req, res) => {
    const url = 'http://localhost:4001/valores'
    const teste = {
        'numero': 3,
        'primo': true,
        'divisores': [1, 3]
    }
    axios.post(url, teste).then(resp => {
        console.log(resp.status)
    })
    res.send(req.statusMessage)
})

app.listen(port, () => console.log(`Servidor rodando e escutando na porta ${port}`))