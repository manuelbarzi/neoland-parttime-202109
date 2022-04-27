const { mongoose: { connect, disconnect } } = require('data')
const {
    registerUser
} = require('.')

connect('mongodb://localhost:27017/notapp')
    .then(() => console.log('connected to db'))
    .then(() => {
        
    })
    .then(() => disconnect())
    .then(() => console.log('disconnected from db'))