require('dotenv').config()
const express = require('express')
const { registerUser, authenticateUser, retrieveUser, 
    deleteUser, createSpace, retrieveSpace, deleteSpace, 
    createReview, deleteReview, addReviewToSpace, 
    createBooking, deleteReviewToSpace
} = require('./handlers')
const { mongoose: { connect } } = require('data')
const cors = require('cors') // para evitar el error de CORS
const { env: { MONGODB_URL, PORT } } = process

connect(MONGODB_URL)
    .then(() => {
        console.log('connected to db')
        const api = express()
        api.use(cors())

        const router = express.Router()
        const jsonBodyParser = express.json()

        // REGISTER USER
        router.post('/users', jsonBodyParser, registerUser)

        // AUTHENTICATE USER
        router.post('/users/auth', jsonBodyParser, authenticateUser)

        // RETRIEVE USER
        router.get('/users', retrieveUser)

        // DELETE USER
        router.delete('/users', jsonBodyParser, deleteUser)

        // CREATE SPACE
        router.post('/spaces', jsonBodyParser, createSpace)

        // RETRIEVE SPACE
        router.get('/spaces/:spaceId', jsonBodyParser, retrieveSpace)

        // DELETE SPACE
        router.delete('/spaces/:spaceId', jsonBodyParser, deleteSpace)

        // // CREATE REVIEW
        // router.post('/reviews/', jsonBodyParser, createReview)

        // ADD REVIEW TO SPACE
        router.post('/spaces/:spaceId/reviews', jsonBodyParser, addReviewToSpace)

        // CREATE BOOKING TO SPACE
        router.post('/spaces/:spaceId/bookings', jsonBodyParser, createBooking)

        // DELETE REVIEW TO SPACE
        router.delete('/spaces/:spaceId/:reviewId', jsonBodyParser, deleteReviewToSpace)


        api.use('/api', router)
        api.listen(PORT, () => console.log('json server running'))

    })