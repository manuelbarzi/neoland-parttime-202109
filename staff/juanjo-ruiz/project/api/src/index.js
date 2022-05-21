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
    createVehicle,
    retrieveVehicle,
    retrieveActiveVehicles,
    retrieveDeactivatedVehicles,
    activateVehicle,
    disableVehicle
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

        router.post('/user', jsonBodyParse, createUser)
        router.post('/user/auth', jsonBodyParse, authenticateUser)
        router.get('/user', retrieveUser)
        router.patch('/user', jsonBodyParse, updateUser)
        router.delete('/user/:userId', jsonBodyParse, unregisterUser)
        router.patch('/user/:userId/deactivated', jsonBodyParse, activateUser)
        router.patch('/user/:userId/active', jsonBodyParse, disableUser)

        router.post('/vehicle', jsonBodyParse, createVehicle)
        router.get('/vehicles/active', retrieveActiveVehicles)
        router.get('/vehicles/deactivated', retrieveDeactivatedVehicles)
        router.get('/vehicle/:vehicleId', retrieveVehicle)
        router.patch('/vehicle/:vehicleId/deactivated', jsonBodyParse, activateVehicle)
        router.patch('/vehicle/:vehicleId/active', jsonBodyParse, disableVehicle)

        api.use('/api', router)

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))

    })