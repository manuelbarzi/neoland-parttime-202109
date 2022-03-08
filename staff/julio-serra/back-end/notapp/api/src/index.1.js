const express = require('express')
const registerUser = require('logic')
const { mongoose: { connect } } = require('data')

connect('mongodb://localhost:27017/noteapp')
    .then(() => {
        console.log('connected to db')
        const api = express()

        const router = express.Router()

        const jsonBodyParser = express.json()

        router.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { body: { name, email, password } } = req

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.use('/api', router)

        api.listen(8080, () => console.log('json server running'))
    })