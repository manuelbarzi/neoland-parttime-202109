//versión con Authenticate en forma síncrona

const express = require('express')
const { registerUser, authenticateUser } = require('logic') //dependencia logic
const { User } = require('data')

User.cache()   //PRIMERO cargo cache
    .then(() => {


const api = express()

api.get('/holamundo', (req, res) => {
    res.send('Hola, Mundo!!!')
})

const bodyParser = require('body-parser')  //recupera un body de una petitición

const jsonParser = bodyParser.json()  //Herramienta de xpress que parsea body


api.post('/api/users', jsonParser, (req, res) => { //enviar datos de users
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

    try {  //forma síncrona
        const id = authenticateUser(email, password)

        res.status(200).json({ id })


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

api.listen(8080, () => console.log('api listening on 8080'))

})