//versión que importa el archivo cors:

const express = require('express')
const { registerUser, authenticateUser } = require('logic')
const {mongoose: { connect }} = require('data')
const cors = require('./cors')

connect('mongodb://localhost:27017/notapp')
    .then(() => {
        console.log('connected to database')

        const api = express()
                //* = para todas las rutas utiliza el cors(doc)
        api.use('*', cors)

        const router = express.Router()

        const jsonBodyParser = express.json()

        router.post('/users', jsonBodyParser, (req, res ) => {
            try {
                const {body: { name, email, password }} = req

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message}))

            } catch (error) {
                res.status(400).json({ error: error.message})
                
            }
        })


        router.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                
                const { body: { email, password }} = req

                authenticateUser(email, password)
                    .then(id => res.status(200).send(id))
                    .catch(error => res.status(400).json({ error: error.message}))
            } catch (error) {
                res.status(400).json({ error: error.message})
                
            }
        })

        router.get('/users', (req, res) => {
            //TODO
        })

        api.use('/api', router)

        api.listen(8080, () => console.log('json server running'))
    })