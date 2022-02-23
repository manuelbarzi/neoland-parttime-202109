//conecto a la base de datos


const { connect, disconnect } = require('mongoose')  //conecto con mongo base d datos
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))
   
////////***BUSCAR UN USUARIO POR ID

    .then(() => User.findById('6215248ddfe2849f8d22f728'))
    .then(user => {   //me devuelve el user 
        console.log(user._doc)   //getter & setter, porque mongoose ya lo tiene


        user.name = 'John Smith Test'  //cambio de nombre
        user.email = 'john@smith.com'

        return user.save()
    })

    .then(() => console.log('updated john saved'))

    .then(() => disconnect())
    .then(() => console.log('disconnected'))