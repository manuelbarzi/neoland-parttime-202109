//Montar el server
//versión que ya tiene cors instalado (oficial):
require('dotenv').config() //cargo var de enviroment, trae librería dotenv y llama método config busca carpeta de la api y lo carga en momeria

const {mongoose: { connect }} = require('data')
const express = require('express')
const cors = require('cors') //cors oficial

const { registerUserH, authenticateUserH, retrieveUserH,  updateUserH, } = require('./handlers') //importo handlers que envuelven a la lógica
const { 
    deleteUser,
    createNote,
    updateNote, 
    retrieveNotes,
    deleteNote} = require('logic') //de la carpeta logic del servidor

const {extractUserIdFromAuthorization} = require('./handlers/helpers')

const { env: { MONGODB_URL, PORT}} = process //destructuro de .env

connect(MONGODB_URL) //ya no pongo la url tal cual
    .then(() => {
        console.log('connected to database')

        const api = express()
                
        api.use(cors())

        const router = express.Router()

        const jsonBodyParser = express.json()

    
     //***** REGISTER USER 
        router.post('/users', jsonBodyParser, registerUserH)

    //*****  AUTHENTICATE USER  
        router.post('/users/auth', jsonBodyParser, authenticateUserH)

    //***** RETRIEVE USER
        router.get('/users', retrieveUserH)

    // ***** UPDATE USER
        router.patch('/users', jsonBodyParser, updateUserH)

    // ***** DELETE USER
                                //jsonBody, para recibir el pwd
        router.delete('/users', jsonBodyParser, (req, res) => {
            try {
                const userId = extractUserIdFromAuthorization(req)

                const {  body: {password}} = req

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

                const userId = extractUserIdFromAuthorization(req)
                const { body: {text, color, public}} = req  //del body extraigo text, color,pub
               

                createNote(userId, text, color, public)
                .then(() => res.status(201).send())  //creado
                .catch(error => res.status(400).json({ error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

    // ***** UPDATE NOTE
       
        router.patch('/notes/:noteId', jsonBodyParser, (req, res) => {
            try {
                const userId = extractUserIdFromAuthorization(req)
                const{ params: { noteId}, body: {text, color, public}} =req
               

                updateNote(userId, noteId, text, color, public)
                .then(() => res.status(204).send())
                .catch(error => res.status(400).json({ error: error.message}))
            } catch (error) {
                res.status(400).json({ error: error.message})
                
            }
        })

    //***** RETRIEVE MY NOTES, (ruta extra: en esta ruta NO pasamos el 'ownerId', si no directamente users->notes para recuperar sólo las mías)
        
        router.get('/notes', jsonBodyParser, (req, res) =>{
            try {

                const userId = extractUserIdFromAuthorization(req)

                retrieveNotes(userId, userId) //nota de mi mismo
                    .then(notes => res.status(200).json(notes))
                    .catch(error => res.status(400).json({ error: error.message}))
            } catch (error) {
                res.status(400).json({ error: error.message})
            }
        })



    // ***** RETRIEVE NOTES de alguien...
                        //combino users con notas en la url/de ese user->cuál user-> dame notas
        router.get('/users/:ownerId/notes', jsonBodyParser, (req, res) => {
            try {
                const userId = extractUserIdFromAuthorization(req)
                const {  params: { ownerId}} = req
                

                retrieveNotes(userId, ownerId) 
                    .then(notes => res.status(200).json(notes))  //devuelvo notas en un json
                    .catch(error => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({ error: error.message})
            }
        })
        
        
     // ***** DELETE NOTE
        router.delete('/notes/:noteId', jsonBodyParser, (req, res) => {
            try {

                const userId = extractUserIdFromAuthorization(req)
                const { params: { noteId }} = req

             

                deleteNote(userId, noteId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message}))
            } catch (error) {
                res.status(400).json({ error: error.message})
            }
        })


        api.use('/api', router)

        api.listen(PORT, () => console.log('json server running'))
    })