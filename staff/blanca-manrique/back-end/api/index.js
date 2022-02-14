const express = require('express')

const api = express()
api.get('/holamundo', (req, res) => {
    res.send('Hola mundo')
})
api.listen(8080, () => console.log('api escuchando en puerto 8080'))