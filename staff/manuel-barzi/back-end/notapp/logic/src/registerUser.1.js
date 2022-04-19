const { models: { User } } = require('data')
const {
    validators: {
        validateName,
        validateEmail,
        validatePassword
    },
    errors: {
        DuplicityError
    }
} = require('commons')


function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    /*
    const user = new User({ name, email, password })

    return user.save()
        .then(user => { })
    */

    return User.create({ name, email, password })
        .then(user => { })
        .catch(error => {
            if (error.message.includes('duplicate'))
                throw new DuplicityError('user already exists')

            throw error
        })
}

module.exports = registerUser