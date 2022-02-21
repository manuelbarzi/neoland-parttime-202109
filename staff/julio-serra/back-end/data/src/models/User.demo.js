const { connect, disconnect } = require('mongoose')
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
//trabajamos con promesas
.then(() => console.log('conectado piratilla'))
.then(() => User.findOne({ name: 'Peter Pan' }))
.then(user => console.log(user))
.then(() => disconnect)
.then(() => console.log('Desconectado piratilla'))
