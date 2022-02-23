//conecto a la base de datos


const { connect, disconnect } = require('mongoose')  //conecto con mongo base d datos
const user = require('../schemas/user')
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))
    // .then(() => User.findOne({ name: 'Mickey Mouse'}))
    // .then(user => console.log(user))
    // .then(() => User.find({ name: /Mickey/ }))
    // .then(users => console.log(users))

////////***CREAR UN NUEVO USUARIO

    // .then(() => {
    //     const user = new User({ name: 'John Doe', email: 'john@doe.com', password: '123123123' })
    //     return user.save()

    // })
    // .then(() => console.log('john saved'))

////////***BUSCAR UN USUARIO POR ID

    // .then(() => User.findById('6215248ddfe2849f8d22f728'))
    // .then(user => {   //me devuelve el user 
    //     console.log(user._doc)   //getter & setter, porque mongoose ya lo tiene


    //     user.name = 'John Smith Test'  //cambio de nombre
    //     user.email = 'john@smith.com'

    //     return user.save()
    // })
    // .then(() => console.log('updated john saved'))


 ////////***BORRAR UN USUARIO ID

// .then(() => User.deleteOne({ _id: '6215248ddfe2849f8d22f728'}))     //método stático deleteOne, _id , si no se escribe el guin borra el primero que encuentr
//     .then(() => console.log('john deleted'))



/////////***CREAR Y MODIFICAR UN USUARIO DE UNA FORMA MÁS DIRECTA , con método estático

    .then(() => User.create ({ name: 'Mickey Raton', email: 'raton@mail.com', password: '123123123' }))
    .then(user => {   //recibo en la promesa el usuario
        console.log( 'Mickey created and updated', user._doc )

        //modificar datos:
        user.name = 'Mickey Mouse'
        user.email = 'mickey@mail.com'

        return user.save()
    })
//vuelvo a modificar:
    .then(user => {
        console.log('mickey updated', user._doc)

        user.name = 'Mickey M'
        user.name = 'm@mail.com'

        return user.save()
    })

    .then(() => {
        console.log( 'mickey m updated', user._doc)

//borra user

        return User.deleteOne({_id: user.id} )
    })

    .then(() => console.log('mickey deleted'))

    .then(() => disconnect())
    .then(() => console.log('disconnected'))