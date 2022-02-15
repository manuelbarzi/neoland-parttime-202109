const express = require('express')
const { registerUser, authenticateUser } = require('logic')

const api = express()

api.get('/holamundo', (req, res) => {
    res.send('Hola, mundo!')
})

const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

api.post('/api/users', jsonParser, (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    try {
        registerUser(name, email, password)
            .then(() => {
                res.status(201).send()
            })
            .catch(error => {
                res.status(400).json({ error: error.message })
            })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

api.post('/api/users/auth', jsonParser, (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        authenticateUser(email, password)
            .then(id => {
                res.status(201).send({ id })
            })
            .catch(error => {
                res.status(400).json({ error: error.message })
            })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

api.listen(8080, () => console.log('api listening on 8080'))