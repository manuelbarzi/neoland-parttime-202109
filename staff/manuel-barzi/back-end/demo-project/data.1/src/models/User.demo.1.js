const { connect, disconnect } = require('mongoose')
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))
    // .then(() => User.findOne({ name: 'Wendy Pan'}))
    // .then(user => console.log(user))
    // .then(() => User.find({ name: /Pan/ }))
    // .then(users => console.log(users))
    .then(() => {
        const user = new User({ name: 'John Doe', email: 'john@doe.com', password: '123123123' })

        return user.save()
            .then(() => {
                console.log('john saved')
            })
    })
    .then(() => disconnect())
    .then(() => console.log('disconnected'))