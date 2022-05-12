require('dotenv').config()

const { mongoose: { connect } } = require('data')
const express = require('express')
const cors = require('cors')
const {
    registerCompany
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
        router.post('/company/auth', jsonBodyParse, registerCompany)


        api.use('/api', router)

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))

    })