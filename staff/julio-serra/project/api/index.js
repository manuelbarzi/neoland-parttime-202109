const express = require('express')
const api = express()

app.get('/holamundo', function (req, res) {
    res.send('Hola Mundo')
  })

  api.listen(8080, () => console.log('escuchando en el puerto 8080'))

  