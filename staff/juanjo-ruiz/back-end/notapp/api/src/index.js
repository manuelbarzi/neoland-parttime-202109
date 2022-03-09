const express = require('express')
const registerUser = require('logic')
const { mongoose: { connect } } = require('data')


connect('mongodb://localhost:27017/notapp')
    .then(() => {
        console.log('db connected to db')

        const api = express()

        api.use('*', (req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')

            next()
        })

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

        api.listen(8080, () => console.log('server running'))

    }) 