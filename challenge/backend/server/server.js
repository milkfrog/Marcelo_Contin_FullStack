const Express = require('express')
const Axios = require('axios')
const BodyParser = require('body-parser')
const NumberFunctions = require('../service/numberFunctions')

const app = Express()
const port = 4002

app.use(BodyParser.urlencoded({ extended: true }))

app.get('/api/mensagem', (req, res) => {
    res.send({ Express: 'Teste' })
})

app.post('/api/divisores', (req, res) => {
    let array = NumberFunctions.dividers(req.body.number)
    console.log(NumberFunctions.isPrime(array))
    res.send(array)
})

app.get('/api/teste', (req, res) => {
    const url = 'http://localhost:4001/valores'
    const teste = {
        'numero': 3,
        'primo': true,
        'divisores': [1, 3]
    }
    Axios.post(url, teste).then(resp => {
        console.log(resp.status)
    })
    res.send(req.statusMessage)
})

app.listen(port, () => console.log(`Servidor rodando e escutando na porta ${port}`))