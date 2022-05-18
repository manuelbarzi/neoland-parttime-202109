require('dotenv').config()

const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const cors = require('cors')
const { 
    registerUser,
    authenticateUser,
    retrieveUser,
    updatePassword,
    updateUser,
    deleteUser
} = require('./handlers')

const { env: { MONGODB_URL, PORT } } = process

connect(MONGODB_URL)
    .then(() => {
        console.log('Database connected')

        const api = express()

        api.use(cors())

        const router = express.Router()

        const jsonBodyParser = express.json()

        router.post('/users', jsonBodyParser, registerUser)
        router.post('/users/auth', jsonBodyParser, authenticateUser)
        router.get('/users', retrieveUser)
        router.patch('/users', jsonBodyParser, updateUser)
        router.patch('/users/password', jsonBodyParser, updatePassword)
        router.delete('/users', jsonBodyParser, deleteUser)


        api.use('/api', router)

        api.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
    })








/* El Intercambio de Recursos de Origen Cruzado (CORS (en-US))
 es un mecanismo que utiliza cabeceras HTTP adicionales para permitir
  que un user agent (en-US) obtenga permiso para acceder a
   recursos seleccionados desde un servidor, en un origen 
   distinto (dominio) al que pertenece.
   
   Por razones de seguridad, los exploradores restringen las solicitudes HTTP
    de origen cruzado iniciadas dentro de un script. Por ejemplo, XMLHttpRequest
     y la API Fetch siguen la política de mismo-origen. Ésto significa que una
      aplicación que utilice esas APIs XMLHttpRequest sólo puede hacer solicitudes
       HTTP a su propio dominio, a menos que se utilicen cabeceras CORS*/