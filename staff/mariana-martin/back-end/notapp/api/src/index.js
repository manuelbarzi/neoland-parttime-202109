//Montar el server
//versión que importa el archivo cors:

const express = require('express')
const { registerUser, 
     authenticateUser, 
    retrieveUser, 
    updateUser, 
    deleteUser,

    createNote} = require('logic') //de la carpeta logic del servidor
    
const {mongoose: { connect }} = require('data')
const cors = require('./cors')

connect('mongodb://localhost:27017/notapp')
    .then(() => {
        console.log('connected to database')

        const api = express()
                //* = para todas las rutas utiliza el cors(doc)
        api.use('*', cors)

        const router = express.Router()

        const jsonBodyParser = express.json()

     //***** REGISTER
        router.post('/users', jsonBodyParser, (req, res ) => {
            try {
                const {body: { name, email, password }} = req

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message}))

            } catch (error) {
                res.status(400).json({ error: error.message})
                
            }
        })

    //***** AUTHENTICATE
        router.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                
                const { body: { email, password }} = req

                authenticateUser(email, password)
                    .then(id => res.status(200).send(id))
                    .catch(error => res.status(400).json({ error: error.message}))
            } catch (error) {
                res.status(400).json({ error: error.message })
                
            }
        })
    //***** RETRIEVE
        router.get('/users', (req, res) => {
            try {
                
                const { headers: { authorization }} = req

                const [, userId] = authorization.split(' ')

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message}))
            } catch (error) {
                    res.status(400).json({ error: error.message })
            }
        })

    // ***** UPDATE
        router.patch('/users', jsonBodyParser, (req, res) => {

            try {
                const {headers: { authorization }, body: { name, email, password}} = req
                const [, userId] = authorization.split(' ')

                updateUser(userId, name, email, password)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message}))
            } catch (error) {
                res.status(400).json({ error: error.message})
                
            }
        })

    // ***** DELETE USER

        router.delete('/users', jsonBodyParser, (req, res) => {
            try {
                const { headers: { authorization }, body: {password}} = req

                const [, userId ] = authorization.split(' ')

                deleteUser(userId, password)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message})
                
            }
        })

    // ***** CREATE NOTE

        router.post('/notes', jsonBodyParser, (req, res) => {
            try {
                const {headers: { authorization}, body: {text, color, public}} =req
                const [, userId] = authorization.split(' ')

                createNote(userId, text, color, public)
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })


        api.use('/api', router)

        api.listen(8080, () => console.log('json server running'))
    })