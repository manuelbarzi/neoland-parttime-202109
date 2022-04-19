const { models: { User } } = require('data')
const { 
    validators: { 
        validateEmail, 
        validatePassword 
    },
    errors: {
        AuthError
    }
} = require('commons')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email, password })
        .then(user => {
            if (!user)  throw new AuthError('wrong credentials')

            return user.id
        })
}

module.exports = authenticateUser