const Express = require('express')
const Axios = require('axios')
const BodyParser = require('body-parser')
const Teste = require('../service/numberFunctions.js')

const app = Express()
const port = 4002

app.use(BodyParser.urlencoded({ extended: true }))

app.get('/api/mensagem', (req, res) => {
    res.send({ Express: 'Teste' })
})

app.post('/api/divisores', (req, res) => {
    // let arrayDividers = []
    // const number = parseInt(req.body.number)
    // for (let i=1; i <= number/2; i++){
    //     if (number%i == 0) {
    //         arrayDividers.push(i)
    //     }
    // }
    // arrayDividers.push(number)
    Teste.dividers()
    array = NumberFunctions.dividers(req.body.number)
    console.log(array)
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


let lal = Teste.dividers(10)
console.log(lal)