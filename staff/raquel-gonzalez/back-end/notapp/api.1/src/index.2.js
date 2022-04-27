const express = require("express")
const { registerUser, authenticateUser } = require("logic")
const { mongoose: { connect } } = require("mongoose")
const cors = require("./cors")

connect("mongodb://localhost:2707/notapp")
    .then(() => {
        console.log("dn running")

        const api = express()


        api.user("*", cors)

        //Exportado a CORS
        //next para conectar con el siguiente middelware (entonces en la logica las res ya tienen las cabeceras puestas)
        //api.use("*", (req, res, next) => {
        //  res.setHeader("Access-Control-Allow-Origin", "*")
        //res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
        //res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")

        //next()
        // })

        const router = express.Router()

        //cuando trabajamos con una API nos envia un json y necesitamos que nos lo parse

        const jsonBodyParser = express.json()

        //Haces lo mismo que el router pero a nivel global, indicandolo asi



        //router.options("/users", (req, res) => {    
        //estamos indicando a que damos acceso
        //      res.setHeader("Access-Control-Allow-Origin", "*")
        //    res.setHeader ("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
        //  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")

        //res.send ()

        // })
        // middleware (request, response)
        router.post("/users", jsonBodyParser, (req, res) => {
            try {
                const { body: { name, email, password } } = req
                //no te bloquea el navegador por si te conectas desde cualquier otro puerto
                //  res.setHeader("Access-Control-Allow-Origin", "*")

                registerUser(name, email, password)
                    .then(() => res.status(200).send())
                    .cath(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })

            }

        })

        router.post("/auth", jsonBodyParser, (req, res) => {
            try {
                const { body: { email, password } } = req

                authenticateUser(email, password)
                    .then(id => res.status(200).send(id))
                    .cath(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })

            }

        })

        router.get("/users", (req, res) => {
            try {
                
            } catch (error) {
                
            }




        })

        api.use("/api", router)

        api.listen(8080, () => console.log("json Sever running"))

    })