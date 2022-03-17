//Montar el server
//versión que importa el archivo cors:

const express = require('express')
const { registerUser, 
     authenticateUser, 
    retrieveUser, 
    updateUser, 
    deleteUser,

    createNote,
    updateNote, 
    retrieveNotes,
    deleteNote} = require('logic') //de la carpeta logic del servidor

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

    //MANEJADORES:
     //***** REGISTER USER 
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

    //*****  AUTHENTICATE USER  (usaremos id como token, por ahora) 
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
    //***** RETRIEVE USER
        router.get('/users', (req, res) => {   //ruta
            try {
                
                const { headers: { authorization }} = req  //enviamos en este caso id(en vex de token) 
                                                            
                const [, userId] = authorization.split(' ')  //extraemos id del authorizarion (bearer' 'XXXXXX)dividimos 
                                                            //destructuro authorization [bearer idxxxxxx] la coma es bearer y me quedo la 2 parte
                retrieveUser(userId)                                                       //1    //2
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message}))
            } catch (error) {
                    res.status(400).json({ error: error.message })
            }
        })

    // ***** UPDATE USER
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
                                //jsonBody, para recibir el pwd
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
                const {headers: { authorization}, body: {text, color, public}} = req  //del body extraigo text, color,pub
                const [, userId] = authorization.split(' ')

                createNote(userId, text, color, public)
                .then(() => res.status(201).send())  //creado
                .catch(error => res.status(400).json({ error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

    // ***** UPDATE NOTE
        //para cambiar nota en api es envio el url de la nota (:noteId) y lo extraemos con params:
        //en insomnia para probar enla url poner tal cual el id de la nota
        router.patch('/notes/:noteId', jsonBodyParser, (req, res) => {
            try {
                const{ headers: { authorization }, params: { noteId}, body: {text, color, public}} =req
                const [, userId] = authorization.split(' ')

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
                const { headers :{ authorization}} =req
                const [, userId] = authorization.split(' ')

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
                const { headers : { authorization }, params: { ownerId}} = req
                const[, userId] = authorization.split(' ')

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
                const {headers: { authorization}, params: { noteId }} = req

                const [, userId] = authorization.split(' ')

                deleteNote(userId, noteId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message}))
            } catch (error) {
                res.status(400).json({ error: error.message})
            }
        })


        api.use('/api', router)

        api.listen(8080, () => console.log('json server running'))
    })