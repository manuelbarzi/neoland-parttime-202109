require('dotenv').config() //cargamos todas las configuraciones en memoria del archivo .env

const express = require('express')
const { mongoose: { connect } } = require('data')
const cors = require('cors')
const { registerUser,
    authenticateUser,
    registerUser,
    updateUser,
    deleteUser,
    createNote,
    updateNote,
    deleteNote,
    retrieveNotes,
    retrieveNotesOwnerId
} = require('./handlers')

/* const { extractUserIdFromAuthorization } = require('./handlers/helpers') ya no es necesario porque esta implementado en cada handlers*/

const { env: { MONGODB_URL, PORT } } = process

connect(MONGODB_URL)
    .then(() => {
        console.log('db connected to db')

        const api = express()

        api.use(cors())

        const router = express.Router()

        const jsonBodyParser = express.json()

        router.post('/users', jsonBodyParser, registerUser)
        router.post('/users/auth', jsonBodyParser, authenticateUser)
        router.get('/users', retrieveUser)
        router.patch('/users', jsonBodyParser, updateUser)
        router.delete('/users', jsonBodyParser, deleteUser)
        router.post('/notes', jsonBodyParser, createNote)
        router.patch('/notes/:noteId', jsonBodyParser, updateNote)
        router.delete('/notes/:noteId', jsonBodyParser, deleteNote)
        router.get('/notes', jsonBodyParser, retrieveNotes)
        router.get('/users/:ownerId/notes', jsonBodyParser, retrieveNotesOwnerId)

        api.use('/api', router)

        api.listen(PORT, () => console.log('server running'))

    }) 