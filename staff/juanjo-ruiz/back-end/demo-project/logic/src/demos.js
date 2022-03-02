const { mongoose: { connect, disconnect } } = require('data')
const { registerUser } = require('.')

connect('mongodb://localhost:27017/demo-project')
    .then(() => console.log('connected to db'))
    .then(() => {
        try {
            return registerUser('Ceni Za', 'ceni@za.com', '123123123')
                .then(() => console.log('Ceni Za registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => disconnect())
    .then(() => console.log('disconnected from db'))
    