require('dotenv').config()
const { mongoose: { connect } } = require('../../data')
const express = require('express')
const cors = require('cors')
const { registerUser, authenticateUser, retrieveUser } = require('./handlers')
const { createNote, updateNote, deleteNote } = require('../../logic')
const { Router } = require('express')
const { env: { MONGODB_URL, PORT } } = process
const { extracUserIdFromAuthorization } = require('./helpers')


connect(MONGODB_URL)
    .then(() => {
        console.log('connected to db')
        const api = express()

        // para evitar el error de CORS
        api.use(cors())
        // api.use('*', (req, res, next) => {
        //     res.setHeader('Access-Control-Allow-Origin', '*')
        //     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH')
        //     res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')

        //     next()
        // })

        const router = express.Router()

        const jsonBodyParser = express.json()



        router.post('/users', jsonBodyParser, registerUser)
        router.post('/users/auth', jsonBodyParser, authenticateUser)

        // RETRIEVE USER
        router.get('/users', retrieveUser)

        // CREATE NOTE
        router.post('/notes', jsonBodyParser, (req, res) => {
            try {
                const id = extracUserIdFromAuthorization(req)
                const { body: { color, public, text } } = req

                createNote(id, color, public, text)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })


        // UPDATE NOTE
        router.patch('/notes/:noteId', jsonBodyParser, (req, res) => {
            try {
                const id = extracUserIdFromAuthorization(req)
                const { params: { noteId }, body: { color, public, text } } = req

                updateNote(id, noteId, color, public, text)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })


        // DELETE NOTE
        router.delete('/notes/:noteId', jsonBodyParser, (req, res) => {
            try {
                const id = extracUserIdFromAuthorization(req)
                const { params: { noteId } } = req

                deleteNote(id, noteId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })



        api.use('/api', router)

        api.listen(PORT, () => console.log('json server running'))
    })