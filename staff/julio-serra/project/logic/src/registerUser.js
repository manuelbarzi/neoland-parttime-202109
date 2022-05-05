const { DuplicityError } = require('../../commons/src/errors')
const { models: { User } } = require('data')

function registerUser(name, email, password, image) {


    return User.create({ name, email, password, image })
    .then(user => {})
    // .catch(error => {
    //     if(error.message.includes('duplicate'))
    //     throw new DuplicityError('user already exists')

    //     throw error
    // })

}

module.exports = registerUser