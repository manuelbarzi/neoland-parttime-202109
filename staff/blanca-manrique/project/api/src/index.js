require('dotenv').config()

const { mongoose: { connect } } = require('data')
const express = require('express')
const cors = require('cors')

const { registerUser, authenticateUser, retrieveUser, deleteUser, createSupplier } = require('./handlers')

const { env: { MONGODB_URL, PORT}} = process

connect(MONGODB_URL)
    .then(() => {
        console.log('database connected')

        const api = express()

        api.use(cors())

        const router = express.Router()

        const jsonBodyParser = express.json() 

        router.post('/users', jsonBodyParser, registerUser)
        router.post('/users/auth', jsonBodyParser, authenticateUser)
        router.get('/users', retrieveUser)
        router.delete('/users', jsonBodyParser, deleteUser)

        router.post('/suppliers', jsonBodyParser, createSupplier)


        api.use('/api', router)

        api.listen(PORT, () => console.log(`server listening on ${PORT}`))
    })