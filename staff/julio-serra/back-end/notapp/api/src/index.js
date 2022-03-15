const express = require('express')
const { registerUser, authenticateUser, retrieveUser, createNote, updateNote, deleteNote } = require('../../logic')
const { mongoose: { connect } } = require('../../data')
const cors = require('./cors')
const { Router } = require('express')

connect('mongodb://localhost:27017/noteapp')
    .then(() => {
        console.log('connected to db')
        const api = express()

        // para evitar el error de CORS
        api.use('*', cors)
        // api.use('*', (req, res, next) => {
        //     res.setHeader('Access-Control-Allow-Origin', '*')
        //     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH')
        //     res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')

        //     next()
        // })

        const router = express.Router()

        const jsonBodyParser = express.json()



        router.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { body: { name, email, password } } = req

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        router.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { body: { email, password } } = req

                authenticateUser(email, password)
                    .then(id => res.status(200).send(id))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        // RETRIEVE USER
        router.get('/users', (req, res) => {
            try {

                const { headers: { authorization } } = req // la cabecera de respuesta es > Authorization: Bearer + id
                const [, id] = authorization.split(' ')
                // hacemos un split del Authorization: Bearer + id que se converte en un array con 2 posiciones y cogemos la segunda (el id)

                retrieveUser(id)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        // CREATE NOTE
        router.post('/notes', jsonBodyParser, (req, res) => {
            try {
                const { headers: { authorization }, body: { color, public, text } } = req
                const [, id] = authorization.split(' ')

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
                const { headers: { authorization }, params: { noteId }, body: { color, public, text } } = req
                const [, id] = authorization.split(' ')

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
                const { headers: { authorization }, params: { noteId } } = req
                const [, id] = authorization.split(' ')

                deleteNote(id, noteId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })



        api.use('/api', router)

        api.listen(8080, () => console.log('json server running'))
    })