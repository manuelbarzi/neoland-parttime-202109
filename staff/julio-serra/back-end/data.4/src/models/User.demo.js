const { connect, disconnect } = require('mongoose')
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    //trabajamos con promesas
    .then(() => console.log('conectado piratilla'))
    // .then(() => User.findOne({ name: 'Peter Pan' }))
    // .then(user => console.log(user))

    //crear usuario
    .then(() => User.create({ name: 'Peter Griffin', email: 'peter@griffin.com', password: '987654321' }))
    .then(user => {
        console.log('usuario creado')
        user.name = 'Pedro Griffindor'
        user.email = 'peter@griffindor.com'
        
        return user.save()
    })
    //Eliminar usuario
    
    // .then(user => {
    //     console.log('Usuario actualizado')
    //     return User.deleteOne({ _id: user.id })
    // })
    .then(() => disconnect)
    .then(() => console.log('Desconectado piratilla'))
