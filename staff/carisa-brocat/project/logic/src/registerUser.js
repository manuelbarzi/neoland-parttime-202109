const { models: { User } } = require('data')
const { errors: {
    DuplicityError,
    ClientError
},
    validators: {
        validateString,
        validateEmail,
        validatePassword
    }
} = require('commons')
const { encryptPassword } = require('./helpers/crypt')

function registerUser(nickname, email, password) {
    validateString(nickname, 'nickname')
    validateEmail(email)
    validatePassword(password)

    return encryptPassword(password)
        .then(hash => User.create({ nickname, email, password: hash}))
        .then(user => { })
        .catch(error => {
            if (error.message.includes('duplicate'))
                throw new DuplicityError('user already exists')

            throw new ClientError(error.message)
        })
}

module.exports = registerUser