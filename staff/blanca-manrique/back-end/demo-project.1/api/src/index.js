const express = require('express')
const { registerUser, authenticateUser } = require('logic')
const {User} = require('data')

User.cache()
.then(() =>{
    const api = express()

    api.get('/holamundo', (req, res) => { //es un GET: no hay body que mandar al servidor
        res.send('Hola mundo!') //si en un send no ponemos el status, por defecto status = 200
    })
    
    const bodyParser = require('body-parser')
    const jsonParser = bodyParser.json()
    
    api.post('/api/users', jsonParser, (req, res) => {
        //json que recibe el servidor:
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
            const id = authenticateUser(email, password)
            res.status(200).json({ id })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    })
    
    api.listen(8080, () => console.log('api escuchando en puerto 8080'))
})



