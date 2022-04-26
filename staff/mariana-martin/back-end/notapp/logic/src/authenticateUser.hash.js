const { models: { User } } = require('data')
const { validators: { validateEmail, validatePassword }, errors: { AuthError} } = require('commons')
const bcrypt = require('bcryptjs')

function authenticateUser(email, password){
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })  //sólo busco por el email
        .then(user => {
            if(!user) throw new Error ('wrong credentials')

            return bcrypt.compare(password, user.password)  //comparar el password original con el hash (user.password)
                .then(match => {
                    if(!match) throw new AuthError('wrong credentials')

                    return user.id
                })
        })
}

module.exports = authenticateUser