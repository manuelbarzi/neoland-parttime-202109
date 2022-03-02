
/////////***CREAR Y MODIFICAR UN USUARIO DE UNA FORMA MÁS DIRECTA , con método estático


const { connect, disconnect } = require('mongoose')  //conecto con mongo base d datos
const user = require('../schemas/user')
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))


    .then(() => User.create ({ name: 'Mickey Raton', email: 'raton@mail.com', password: '123123123' }))
    .then(user => {   //recibo en la promesa el usuario
        console.log( 'Mickey created and updated' )

        //modificar datos:
        user.name = 'Mickey Mouse'
        user.mail = 'mickey@mail.com'

        return user.save()
    })

    .then(() => console.log( 'Mickey created and updated' ))

    .then(() => disconnect())
    .then(() => console.log('disconnected'))