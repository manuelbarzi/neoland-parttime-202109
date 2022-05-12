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
const bcrypt = require('bcryptjs')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {
            if (!user)  throw new AuthError('wrong credentials')

            return bcrypt.compare(password, user.password)
                .then(match => {
                    if (!match) throw new AuthError('wrong credentials')

                    return user.id
                })
        })
}

module.exports = authenticateUser