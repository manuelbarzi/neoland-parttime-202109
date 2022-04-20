const { models: { User } } = require('../../data')
const {
    errors: {
        DuplicityError },
    validators: {
        validateName,
        validateEmail,
        validatePassword
    } } = require('../../commons')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    // const user = new User({ name, email, password })

    return User.create({ name, email, password })
        .then(user => { })
        .catch(error => {
            if (error.message.includes('duplicate')) // si el error contiene la palabra "duplicate" que lance el siguiente error
                throw new DuplicityError('user already exists')

            throw Error
        })
}

module.exports = registerUser