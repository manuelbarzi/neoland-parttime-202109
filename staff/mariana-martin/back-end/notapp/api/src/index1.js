//Montar el server

const express = require('express')
const { registerUser } = require('logic')
const {mongoose : {connect }} = require('data')


connect('mongodb://localhost:27017/notapp')
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

        const router = express.Router()

        const jsonBodyParser = express.json()

        router.post('/users', jsonBodyParser, (req, res ) => {
            try {
                const { body: { name, email, password }} = req

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.use('/api', router)
        api.listen(8080, () => console.log('json server running'))
    })

