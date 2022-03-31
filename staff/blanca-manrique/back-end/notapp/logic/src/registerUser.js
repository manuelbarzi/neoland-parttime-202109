const {models : { User } } = require('data')
const { 
    validators: { validateName, validateEmail, validatePassword },
    errors: {DuplicityError}
} = require('commons')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

   return User.create({name, email, password})
    .then(user => { })
    .catch(error => {
        if (error.message.includes('duplicate')) //si el error contiene "duplicate" lanzo este error custom
            throw new DuplicityError('user already exists')

        throw error //si el error NO contiene "duplicate", lanzo el error propio de Mongodb
    })

}

module.exports = registerUser