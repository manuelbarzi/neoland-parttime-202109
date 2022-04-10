require('dotenv').config()
const { mongoose: { connect } } = require('data')
const express = require('express')
const cors = require('cors')
const { registerUser,
    authenticateUser,
    retrieveUser,
    unregisterUser,
    retrieveNotes,
    updateNote,
    deleteNote,
    addCommentToNote,
    createNote,
    retrievePublicNotes,
    retrieveNote
} = require('./handlers')
const {
} = require('logic')

const { env: { MONGODB_URL, PORT } } = process
// const { extractUserIdFromAuthorization } = require('./helpers')
// const { json } = require('body-parser')



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

        // UNREGISTER USER
        router.delete('/users', jsonBodyParser, unregisterUser)

        // CREATE NOTE
        router.post('/notes', jsonBodyParser, createNote)

        // RETRIEVE NOTES
        router.get('/notes', retrieveNotes)

        // RETRIEVE NOTE
        router.get('/notes/:noteId', retrieveNote)

        // RETRIEVE PUBLIC NOTES
        router.get('/notes/public', retrievePublicNotes)
        
        // UPDATE NOTE
        router.patch('/notes/:noteId', jsonBodyParser, updateNote)

        // DELETE NOTE
        router.delete('/notes/:noteId', jsonBodyParser, deleteNote)

        // ADD COMMENT TO NOTE
        router.post('/notes/:noteId/comments', jsonBodyParser, addCommentToNote)


        api.use('/api', router)

        api.listen(PORT, () => console.log('json server running'))
    })