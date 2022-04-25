const { connect, disconnect} = require('mongoose')
const user = require('../schemas/user')
const User = require('./User')

connect('mongodb://localhost:27017/demo-db') //20017--> puerto por defecto , demo-db-->indicamos a qué base de datos tiene q conectar
    .then(() => console.log('connected'))

    //Ej 1: buscamos el primer usuario que tenga el name = Wendy Pan
    // .then(() => User.findOne({ name: 'Wendy Pan'}))
    // .then(user => console.log(user))

    //Ej 2: buscamos todos los usuarios que tengan en el nombre la palabra Pan
    // .then(() => User.find({ name: /Pan/ }))
    // .then(users => console.log(users))

    //Ej 3: buscamos usuario por su id. Luego modificamos su nombre y email, y lo salvamos
    // .then(() => User.findById('6215017a048ad35591b5cea9'))
    // .then(user =>{
    //     user.name = 'Jose Potter'
    //     user.email = 'jose@potter.com'

    //     return user.save()
    // })

    //Ej 4: borramos un usuario
    // .then(()=> User.deleteOne({_id:'6213e964e4d5d6f45f7eeb5c'}))
    // .then(() => console.log('user deleted'))


    //Ej 5: creamos un nuevo user y lo salvamos
    // .then(() => {
    //     const user = new User({ name: 'John Doe', email: 'john@doe.com', password: '123123123' })

    //     return user.save()
    // })
    // .then(() => console.log('john saved'))


    //Ej 6: creamos un usuario directamente con un método estático
    // .then(() => User.create({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '121212' }))
    // .then(user => user.save())

    .then(() => disconnect())
    .then(() => console.log('disconnected'))  