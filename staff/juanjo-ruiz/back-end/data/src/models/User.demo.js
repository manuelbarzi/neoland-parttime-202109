const { connect, disconnect } = require('mongoose')
const User = require('./User')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))
    .then(() => {
        const user = new User({ name: 'Samu Pove', email: 'samupove@mail.com', password: '12341234'})
        
        return user.save()
            .then(() => {
                console.log('samu saved')
            })
    })
    .then(() => disconnect())
    .then(() => console.log('disconnected'))