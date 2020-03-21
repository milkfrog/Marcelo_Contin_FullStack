const express = require('express')
const axios = require('axios')

const app = express()
const port = process.env.PORT || 4002

app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Teste' })
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