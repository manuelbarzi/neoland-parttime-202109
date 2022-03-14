const { mongoose: { connect, disconnect } } = require('data')
const { registerUser, authenticateUser } = reuire('.')

connect('mongodb://localhost:27017/demo-project')
    .then(() => console.log('connected to db'))
    .then(() => {
        try {
            return registerUser('DogDog', 'dog@gmail.com', '12345678')
            // return registerUser('CatCat', 'cat@gmail.com', '12345678')

            // return registerUser('Nothing', '', '12345678')
            //     .then(() => console.log('user registered'))
            //     .catch(error => console.log('error'))
        } catch (error) {
            console.log(error)
        }

        try {
            return authenticateUser('dog@gmail.com', '12345678')
                .then(id => console.log('user authenticated', id))
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    })

    .then(() => disconnect())
    .then(()=> console.log('disconnected from db'))
