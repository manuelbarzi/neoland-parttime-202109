const {models : { User } } = require('data')
const { 
    validators: { validateUsername, validateEmail, validatePassword },
    errors: {DuplicityError}
} = require('commons')
const bcrypt = require('bcryptjs')

function registerUser(username, email, password) {
    validateUsername(username)
    validateEmail(email)
    validatePassword(password)

    return bcrypt.hash(password, 10)
        .then(hash => User.create({ username, email, password: hash }))
        .then(user => { })
        .catch(error => {
            if (error.message.includes('duplicate')) //si el error contiene "duplicate" lanzo este error custom
                throw new DuplicityError('user already exists')

            throw error //si el error NO contiene "duplicate", lanzo el error propio de Mongodb
        })

}

module.exports = registerUser