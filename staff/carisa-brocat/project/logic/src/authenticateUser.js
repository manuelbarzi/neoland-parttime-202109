const { models: { User } } = require('data')
const { errors: {
    AuthError,
    ClientError,
},
    validators: {
        validateEmail,
        validatePassword
    }
} = require('commons')
const { comparePassword } = require('./helpers/crypt')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {

            return comparePassword(password, user) //compara el password encriptado y el q pasa el usuario, devuelve booleano
                .then((isSamePassword) => {
                    if (!isSamePassword) {
                        throw new AuthError('Invalid Credentials')
                    }

                    return user.id
                })
                .catch(error => {
                    throw new ClientError(error.message)
                })
        })
}

module.exports = authenticateUser
