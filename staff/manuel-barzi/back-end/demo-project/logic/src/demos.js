const { mongoose: { connect, disconnect } } = require('data')
const { registerUser, authenticateUser } = require('.')

connect('mongodb://localhost:27017/demo-project')
    .then(() => console.log('connected to db'))
    .then(() => {
        // try {
        //     //return registerUser('Ceni Za', 'ceni@za.com', '123123123')
        //     //return registerUser('Pere Zosa', 'pere@zosa.com', '123123123')
        //     return registerUser('Va Cio', ' ', '123123123')
        //         .then(() => console.log('user registered'))
        //         .catch(error => console.error(error))
        // } catch(error) {
        //     console.error(error)
        // }

        try {
            return authenticateUser('ceni@za.com', '123123123')
                .then(id => console.log('user authenticated', id))
                .catch(error => console.log(error))
        } catch(error) {
            console.error(error)
        }
    })
    .then(() => disconnect())
    .then(() => console.log('disconnected from db'))