const { connect, disconnect } = require('mongoose')
const user = require('../schemas/user')
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))

    //.then(() => User.findOne({ name: 'Juanjo Ruiz'}))
    //.then(() => console.log(user))

    //.then(() => User.find({ name: /Ruiz/ }))
    //.then(() => console.log(users))

    // .then(() => {
    //     const user = new User({ name: 'Samu Pove', email: 'samupove@mail.com', password: '12341234' })

    //     return user.save()
    // })
    // .then(() => { console.log('samu saved', user._doc) })

    // .then(() => User.findById('6213e67b5569653cbdc4448f'))
    // .then(user => {
    //     console.log('samu found', user._doc)

    //     user.name = 'Samuel Poveda'
    //     user.email = 'samuelpoveda@mail.com'

    //     return user.save()
    // })
    // .then(() => console.log('samuel saved', user._doc))

    // .then(() => User.deleteOne({ _id: '6213e67b5569653cbdc4448f' }))
    // .then(() => console.log('samuel deleted'))

    .then(() => User.create({ name: 'Samu Pove', email: 'samupove@mail.com', password: '12341234' }))
    .then(user => {
        console.log('samu create', user._doc)

        user.name = 'Samuel Poveda'
        user.email = 'samuelpoveda@mail.com'

        return user.save()
    })
    .then(user => {
        console.log('samu update', user._doc)

        user.name = 'Pepito Grillo'
        user.email = 'pepito@grillo.com'

        return user.save()
    })
    .then(user => {
        console.log('pepito updated', user._doc)

        return User.deleteOne({ _id: user.id})
    })
    .then(() => console.log('pepito deleted'))

    .then(() => disconnect())
    .then(() => console.log('disconnected'))