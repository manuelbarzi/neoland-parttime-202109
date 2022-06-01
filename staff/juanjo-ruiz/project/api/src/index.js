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
    disableVehicle,
    updateVehicle,
    deleteVehicle,
    createPart,
    deletePart,
    detailPart,
    updatePartDriver,
    updatePartAdmin,
    retrieveAllUsers
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
        router.get('/users', retrieveAllUsers)
        router.patch('/user/:userId', jsonBodyParse, updateUser)
        router.patch('/user/:userId/deactivated', jsonBodyParse, activateUser)
        router.patch('/user/:userId/active', jsonBodyParse, disableUser)
        router.delete('/user/:userId', jsonBodyParse, unregisterUser)

        router.post('/vehicle', jsonBodyParse, createVehicle)
        router.get('/vehicles/active', retrieveActiveVehicles)
        router.get('/vehicles/deactivated', retrieveDeactivatedVehicles)
        router.get('/vehicle/:vehicleId', retrieveVehicle)
        router.patch('/vehicle/:vehicleId/deactivated', jsonBodyParse, activateVehicle)
        router.patch('/vehicle/:vehicleId/active', jsonBodyParse, disableVehicle)
        router.patch('/vehicle/:vehicleId', jsonBodyParse, updateVehicle)
        router.delete('/vehicle/:vehicleId', jsonBodyParse, deleteVehicle)
        router.post('/vehicle/:vehicleId/part', jsonBodyParse, createPart)
        router.get('/vehicle/:vehicleId/part/:partId', detailPart)
        router.patch('/vehicle/:vehicleId/part/:partId', jsonBodyParse, updatePartDriver)
        router.patch('/vehicle/:vehicleId/part/:partId/admin', jsonBodyParse, updatePartAdmin)
        router.delete('/vehicle/:vehicleId/part/:partId', jsonBodyParse, deletePart)

        api.use('/api', router)

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))

    })