const { connect, disconnect } = require('mongoose')
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))

    // .then(() => User.findOne({ name: 'Carycary'}))
    // .then(user => console.log(user))

    // .then(() => User.find({ name: /a/ }))
    // .then(users => console.log(users))

    // .then(() => {
    //     const user = new User({ name: 'Aname', email: 'aname@gmail.com', password: '123123123' })

    //     return user.save()
    //         .then(() => {
    //             console.log('aname saved')
    //         })
    // })

    // .then(() => User.findById('6213e6b02ccad10578e2fb08'))
    // .then(user => {
    //     debugger

    //     console.log(user._doc)
    //     user.name = 'Carycary'
    //     user.email = 'carycary@gmail.com'

    //     return user.save()
    // })
    // .then(() => console.log('user saved'))

    // .then(() => User.deleteOne({ _id: '6213e6d82ccad10578e2fb09'}))
    // .then(() => console.log('Pepito deleted'))

    .then(() => User.create({ name: 'MiMita', email: 'mimita@gmail.com', password: '12345678' }))
    .then(user => {
        console.log('mimita saved', user._doc)
        user.name = 'Mimamita'
        user.email = 'mimamita@gmail.com'

        return user.save()
    })
    .then(user => {
        console.log('Mimamita updated', user._doc)

        user.name = 'Mimamita1'
        user.email = 'Mimamita1'

        return user.save()
    })

    .then(user => {
        console.log('Mimamita1 updated', user._doc)
        return User.deleteOne({ _id: user.id })
    })
    .then(() => console.log('Mimamita1 deleted'))

    .then(() => disconnect())
    .then(() => console.log('disconnected'))