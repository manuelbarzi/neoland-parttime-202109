require('dotenv').config()

const { mongoose: { connect } } = require('data')
const express = require('express')
const cors = require('cors')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser
} = require('./handlers')
const {
    unregisterUser,
    createNote,
    updateNote,
    deleteNote,
    retrieveNotes,
    retrievePublicNotesFromUser
} = require('logic')
const { extractUserIdFromAuthorization } = require('./handlers/helpers')

const { env: { MONGODB_URL, PORT } } = process

connect(MONGODB_URL)
    .then(() => {
        console.log('connected to db')

        const api = express()

        api.use(cors())

        const router = express.Router()

        const jsonBodyParser = express.json()

        router.post('/users', jsonBodyParser, registerUser)
        router.post('/users/auth', jsonBodyParser, authenticateUser)
        router.get('/users', retrieveUser)
        router.patch('/users', jsonBodyParser, updateUser)
        
        router.delete('/users', jsonBodyParser, (req, res) => {
            try {
                const userId = extractUserIdFromAuthorization(req)

                const { body: { password } } = req

                unregisterUser(userId, password)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        router.post('/notes', jsonBodyParser, (req, res) => {
            try {
                const userId = extractUserIdFromAuthorization(req)

                const { body: { text, color, public } } = req

                createNote(userId, text, color, public)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        router.patch('/notes/:noteId', jsonBodyParser, (req, res) => {
            try {
                const userId = extractUserIdFromAuthorization(req)

                const { params: { noteId }, body: { text, color, public } } = req

                updateNote(userId, noteId, text, color, public)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

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

        router.get('/notes', jsonBodyParser, (req, res) => {
            try {
                const userId = extractUserIdFromAuthorization(req)

                retrieveNotes(userId)
                    .then(notes => res.status(200).json(notes))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

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

        api.listen(PORT, () => console.log('json server running'))
    })