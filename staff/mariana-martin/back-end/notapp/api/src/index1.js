//Montar el server

const express = require('express')  //paquete de node
const { registerUser } = require('logic') //del paquete logic
const {mongoose : {connect }} = require('data') //para usar lógica necesito data y data mongoose


connect('mongodb://localhost:27017/notapp')  //conecto a base de datos mongoose
    .then(() => {
        console.log('connected to data-base')

        const api = express()

                             //cualquier petición a la api va a pasar por esto, antes de culquier petición (ej, ante de registrar y luego next, continua)
                //indica a express para todas las peticiones (*) utiliza este middle ware
           api.use('*', (req, res, next) => {

            //con estas cabeceras permite que tu API sea consumida desde cualquier servidor:
            res.setHeader('Access-Control-Allow-Origin', '*') //esta permite acceder a la api de cualquier dirección que no sea de origen
            res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE') //qué metodos permitimos
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization') //que tipo de headers permitimos que nos envíe el navegador

            next() 
        })

        const router = express.Router()  //para crear rutas como registrar user *1

        const jsonBodyParser = express.json()  //nos devuelve un parseador de cuerpos json

        //*1 uso ruta express, petición al servidor en esta ruta: (en la req se guardan esos datos)
        router.post('/users', jsonBodyParser, (req, res ) => {
            try {
                const { body: { name, email, password }} = req  //del body extraigo name, mail, psw de la req
                                                                //cuando lo hacemos en jsonBody, nos pone una propiedad body, los campos con las porpeidades de ese objeto
                registerUser(name, email, password)
                    .then(() => res.status(201).send())  //201 = creado
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { //error síncrono:
                res.status(400).json({ error: error.message })
            }
        })

        api.use('/api', router) //úsalo en la ruta API , tood lo que sea api/loquesea... se contruyen rutas
        api.listen(8080, () => console.log('json server running')) //arranco el server...
    })

