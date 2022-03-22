//Montar el server
//versión que ya tiene cors instalado (oficial):
require('dotenv').config() //cargo var de enviroment, trae librería dotenv y llama método config busca carpeta de la api y lo carga en momeria

const {mongoose: { connect }} = require('data')
const express = require('express')
const cors = require('cors') //cors oficial

const { registerUserH, 
    authenticateUserH, 
    retrieveUserH,  
    updateUserH, 
    deleteUserH, 
    createNoteH, 
    updateNoteH,
    retrieveNotesH,
    retrievePublicNotesFromUserH,
    deleteNoteH } = require('./handlers') //importo handlers que envuelven a la lógica

const { 
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
        router.delete('/users', jsonBodyParser, deleteUserH)

    // ***** CREATE NOTE

        router.post('/notes', jsonBodyParser, createNoteH)

    // ***** UPDATE NOTE
       
        router.patch('/notes/:noteId', jsonBodyParser, updateNoteH)

    //***** RETRIEVE MY NOTES, (ruta extra: en esta ruta NO pasamos el 'ownerId', si no directamente users->notes para recuperar sólo las mías)
        
        router.get('/notes', jsonBodyParser, retrieveNotesH)

    // ***** RETRIEVE NOTES FROM USER 
                        //combino users con notas en la url/de ese user->cuál user-> dame notas

        router.get('/users/:ownerId/notes', jsonBodyParser, retrievePublicNotesFromUserH)
        
        
     // ***** DELETE NOTE
        router.delete('/notes/:noteId', jsonBodyParser, deleteNoteH)


        api.use('/api', router)

        api.listen(PORT, () => console.log('json server running'))
    })