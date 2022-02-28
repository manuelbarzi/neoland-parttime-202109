const { connect, disconnect } = require('mongoose')
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))

    // .then(() => User.findOne({ name: 'Wendy Pan'}))
    // .then(user => console.log(user))

    // .then(() => User.find({ name: /Pan/ }))
    // .then(users => console.log(users))

    // .then(() => {
    //     const user = new User({ name: 'John Doe', email: 'john@doe.com', password: '123123123' })

    //     return user.save()
    // })
    // .then(() => console.log('john created', user._doc))

    // .then(() => User.findById('6213ee1c46202f29776a7d75'))
    // .then(user => {
    //     debugger
    //     console.log('john found', user._doc)

    //     user.name = 'John Smith'
    //     user.email = 'john@smith.com'

    //     return user.save()
    // })
    // .then(() => console.log('john saved', user._doc))

    // .then(() => User.deleteOne({ _id: '6213ee1c46202f29776a7d75' }))
    // .then(() => console.log('john deleted'))

    .then(() => User.create({ name: 'John Doe', email: 'john@doe.com', password: '123123123' }))
    .then(user => {
        debugger
        console.log('john created', user._doc)

        user.name = 'John Smith'
        user.email = 'john@smith.com'

        return user.save()
    })
    .then(user => {
        debugger
        console.log('john updated', user._doc)

        user.name = 'Pepito Grillo'
        user.email = 'pepito@grillo.com'

        return user.save()
    })
    .then(user => {
        console.log('pepito updated', user._doc)

        return User.deleteOne({ _id: user.id })
    })
    .then(() => console.log('pepito deleted'))

    .then(() => disconnect())
    .then(() => console.log('disconnected'))