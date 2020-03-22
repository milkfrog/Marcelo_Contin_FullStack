const Express = require('express')
const Axios = require('axios')
const BodyParser = require('body-parser')
const NumberFunctions = require('../service/numberFunctions')

const app = Express()
const port = 4002

app.use(BodyParser.urlencoded({ extended: true }))

app.get('/divisores', (req, res) => {
    const url = 'http://localhost:4001/valores'
    Axios.get(url).then(response => {
        console.log(response.data)
        res.send(response.data)
    })
})

app.post('/divisores', (req, res) => {
    const url = 'http://localhost:4001/valores'
    const object = NumberFunctions.verifyNumber(req.body.number) 
    Axios.post(url, object).then(response => {
        res.send(object)
    }).catch(() => res.send('erro'))
})

app.listen(port, () => console.log(`Servidor rodando e escutando na porta ${port}`))