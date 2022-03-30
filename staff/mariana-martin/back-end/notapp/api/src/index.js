//Montar el server
//versión que ya tiene cors instalado (oficial):
require('dotenv').config() //cargo var de enviroment, trae librería dotenv y llama método config busca carpeta de la api y lo carga en momeria

const {mongoose: { connect }} = require('data')
const express = require('express')
const cors = require('cors') 
//cors oficial

//*** HANDLERS:
const { registerUser, 
    authenticateUser, 
    retrieveUser,  
    updateUser, 
    deleteUser, 
    createNote, 
    updateNote,
    retrieveNotes,
    retrievePublicNotes,
    retrievePublicNotesFromUser,
    deleteNote,
    addCommentToNote } = require('./handlers') //importo handlers que envuelven a la lógica

// const { 
//     deleteNote} = require('logic') //de la carpeta logic del servidor

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
        router.post('/users', jsonBodyParser, registerUser)

    //*****  AUTHENTICATE USER  
        router.post('/users/auth', jsonBodyParser, authenticateUser)

    //***** RETRIEVE USER
        router.get('/users', retrieveUser)

    // ***** UPDATE USER
        router.patch('/users', jsonBodyParser, updateUser)

    // ***** DELETE USER                               //jsonBody, para recibir el pwd
        router.delete('/users', jsonBodyParser, deleteUser)


    // ***** CREATE NOTE
        router.post('/notes', jsonBodyParser, createNote)

    // ***** UPDATE NOTE      
        router.patch('/notes/:noteId', jsonBodyParser, updateNote)

    //***** RETRIEVE MY NOTES       
        router.get('/notes', retrieveNotes)

    //***** RETRIEVE PUBLIC NOTES       
         router.get('/notes/public', retrievePublicNotes)

    // ***** RETRIEVE NOTES FROM USER 
                        //combino users con notas en la url/de ese user->cuál user-> dame notas
        router.get('/users/:ownerId/notes', jsonBodyParser, retrievePublicNotesFromUser)
        
        
     // ***** DELETE NOTE
        router.delete('/notes/:noteId', jsonBodyParser, deleteNote)
        

    // ***** ADD COMMENT TO NOTE 
        router.post('/notes/:noteId/comments', jsonBodyParser, addCommentToNote)


        api.use('/api', router)

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })