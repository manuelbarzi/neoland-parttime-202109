const { connect, disconnect } = require('mongoose')
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))
    
    // .then(() => User.findOne({ name: 'Carycary'}))
    // .then(user => console.log(user))

    // .then(() => User.find({ name: /a/ }))
    // .then(users => console.log(users))

    .then(() => {
        const user = new User({ name: 'Aname', email: 'aname@gmail.com', password: '123123123' })

        return user.save()
            .then(() => {
                console.log('aname saved')
            })
    })
    .then(() => disconnect())
    .then(() => console.log('disconnected'))