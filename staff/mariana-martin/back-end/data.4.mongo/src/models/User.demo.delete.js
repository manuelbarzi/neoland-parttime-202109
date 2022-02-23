//conecto a la base de datos


const { connect, disconnect } = require('mongoose')  //conecto con mongo base d datos
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))
    

 ////////***BORRAR UN USUARIO ID

.then(() => User.deleteOne({ _id: '6216601eb83c5b5eb4c110b7'}))     //método stático deleteOne, _id , si no se escribe el guin borra el primero que encuentr
    .then(() => console.log('mickey deleted'))

    .then(() => disconnect())
    .then(() => console.log('disconnected'))