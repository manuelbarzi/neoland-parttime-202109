require('dotenv').config()

const { mongoose: { connect } } = require('data')
const express = require('express')
const cors = require('cors')
const {
    registerCompany,
    authenticateCompany,
    retrieveCompany,
    updateCompany,
    unregisterCompany,
    createUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    unregisterUser,
    activateUser,
    disableUser,
    createVehicle
} = require('./handlers')

const { env: { MONGODB_URL, PORT } } = process

connect(MONGODB_URL)
    .then(() => {
        console.log('database connect')

        const api = express()

        api.use(cors())

        const router = express.Router()

        const jsonBodyParse = express.json()

        router.post('/company', jsonBodyParse, registerCompany)
        router.post('/company/auth', jsonBodyParse, authenticateCompany)
        router.get('/company', retrieveCompany)
        router.patch('/company', jsonBodyParse, updateCompany)
        router.delete('/company', jsonBodyParse, unregisterCompany)

        router.post('/driver', jsonBodyParse, createUser)
        router.post('/driver/auth', jsonBodyParse, authenticateUser)
        router.get('/driver', retrieveUser)
        router.patch('/driver', jsonBodyParse, updateUser)
        router.delete('/driver/:userId', jsonBodyParse, unregisterUser)
        router.patch('/driver/:userId/desactivated', jsonBodyParse, activateUser)
        router.patch('/driver/:userId/active', jsonBodyParse, disableUser)

        router.post('/vehicle', jsonBodyParse, createVehicle)

        api.use('/api', router)

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))

    })