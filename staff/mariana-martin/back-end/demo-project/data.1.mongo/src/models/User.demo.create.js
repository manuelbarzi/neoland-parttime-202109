//conecto a la base de datos


const { connect, disconnect } = require('mongoose')  //conecto con mongo base d datos
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))

    // .then(() => User.findOne({ name: 'Mickey Mouse'}))
    // .then(user => console.log(user))
    // .then(() => User.find({ name: /Mickey/ }))
    // .then(users => console.log(users))

////////CREAR UN NUEVO USUARIO (concateno con el then de arriba, connected)

    .then(() => {
        const user = new User({ name: 'Lola', email: 'lola@doe.com', password: '123123123' })
        return user.save()

    })
    .then(() => console.log('lola saved'))
    .then(() => disconnect())
    .then(() => console.log('disconnected'))