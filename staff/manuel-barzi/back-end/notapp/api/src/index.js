require('dotenv').config()

const { mongoose: { connect } } = require('data')
const express = require('express')
const cors = require('cors')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    unregisterUser,
    createNote,
    updateNote,
    addCommentToNote,
    retrieveNotes,
    retrievePublicNotes,
    retrieveNote
} = require('./handlers')
const {
    deleteNote,
    retrievePublicNotesFromUser
} = require('logic')
const { extractUserIdFromAuthorization } = require('./handlers/helpers')

const { env: { MONGODB_URL, PORT } } = process

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
        router.patch('/users', jsonBodyParser, updateUser)
        router.delete('/users', jsonBodyParser, unregisterUser)

        router.post('/notes/:noteId/comments', jsonBodyParser, addCommentToNote)

        router.post('/notes', jsonBodyParser, createNote)

        router.patch('/notes/:noteId', jsonBodyParser, updateNote)

        router.delete('/notes/:noteId', jsonBodyParser, (req, res) => {
            try {
                const userId = extractUserIdFromAuthorization(req)

                const { params: { noteId } } = req

                deleteNote(userId, noteId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        router.get('/notes', retrieveNotes)

        router.get('/notes/public', retrievePublicNotes)
        
        router.get('/notes/:noteId', retrieveNote)

        router.get('/users/:ownerId/notes', jsonBodyParser, (req, res) => {
            try {
                const userId = extractUserIdFromAuthorization(req)

                const { params: { ownerId } } = req

                retrievePublicNotesFromUser(userId, ownerId)
                    .then(notes => res.status(200).json(notes))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.use('/api', router)

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })