const express = require('express')
const { registerUser, authenticateUser } = require('logic') 
const api = express()

api.get('/holamundo', (req, res) => {
    res.send('Hola Mundo')
})
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json() // recibir en cuerpo(contenido) en forma de json
 
api.post('/api/users', jsonParser, (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    try {
        registerUser(name, email, password)
        .then(() => { // si va bien nos devuelve un ID
            res.status(201).send() // devolvemos la respuesta es 201 y el json con el ID como objeto {}
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
        authenticateUser( email, password)
        .then(id => { // si va bien nos devuelve un ID
            res.status(200).send({ id }) // devolvemos la respuesta es 201 y el json con el ID como objeto {}
        })
        .catch(error => {
            res.status(400).json({ error: error.message })
        }) 
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

api.listen(8080, () => console.log('escuchando en el puerto 8080'))