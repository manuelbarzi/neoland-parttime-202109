require('dotenv').config()

const { mongoose: { connect } } = require('data')
const express = require('express')
const cors = require('cors')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    findNotes,
    unregisterUser,
    createNote,
    updateNote,
    deleteNote,
    retrieveNotes,
    retrievePublicNotes,
    retrieveNote
} = require('./handlers')

const { extractUserIdFromAuthorization } = require('./handlers/helpers')

const { env: { MONGODB_URL, PORT } } = process

connect(MONGODB_URL)
    .then(() => {
        console.log('connected to db')

        const api = express()

        api.use(cors())

        const router = express.Router()

        const jsonBodyParser = express.json()

        router.post('/users', jsonBodyParser, registerUser)//register user
        router.post('/users/auth', jsonBodyParser, authenticateUser)// authenticate
        router.get('/users', retrieveUser)
        router.patch('/users', jsonBodyParser, updateUser)
        router.get('/notes', retrieveNotes)
        router.get('/notes/find', jsonBodyParser, findNotes)
        router.delete('/users', jsonBodyParser, unregisterUser)
        router.post('/notes', jsonBodyParser, createNote)
        router.patch('/notes/:noteId', jsonBodyParser, updateNote)
        router.get('/notes/public', retrievePublicNotes)
        router.get('/notes/:noteId', retrieveNote)
        router.delete('/notes/:noteId', jsonBodyParser, deleteNote)
        //router.get('/users/:ownerId/notes', jsonBodyParser, retrieveNotes)

        api.use('/api', router)

        api.listen(PORT, () => console.log('json server running'))
    })