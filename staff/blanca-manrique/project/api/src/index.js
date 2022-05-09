const express = require('express')
const { registerUser, authenticateUser, retrieveUser } = require('logic')
const { mongoose: { connect } } = require('data')
const cors = require('cors')

connect('mongodb://localhost:27017/project')
    .then(() => {
        console.log('database connected')

        const api = express()

        api.use(cors())

        const router = express.Router()

        const jsonBodyParser = express.json() 

        router.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { body: { username, email, password } } = req

                registerUser(username, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        router.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { body: { email, password } } = req

                authenticateUser(email, password)
                    .then(userId => res.status(200).json({ userId }))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        router.get('/users', (req, res) => {
            try {
                const { headers: { authorization } } = req
                const [, userId] = authorization.split(' ')

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.use('/api', router)

        api.listen(8080, () => console.log('json server running'))
    })