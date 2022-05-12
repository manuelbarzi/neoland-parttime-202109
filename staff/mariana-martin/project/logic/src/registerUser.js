
const {models: {User}} = require('data')
const { validators: { validateUsername, validateEmail, validatePassword},
        errors: { DuplicityError}} = require('commons')
const bcrypt = require('bcryptjs')



function registerUser(role, username, email, password, registrationDate, nutritionist, age, weight, height, measures, goal){
    validateUsername(username)
    validateEmail(email)
    validatePassword(password)
    

    return bcrypt.hash(password, 10)
        .then(hash => User.create({ role, username, email, password: hash, registrationDate, nutritionist, age, weight, height, measures, goal }))
        .then(user =>{ })
        .catch(error =>{
            if(error.message.includes('duplicate'))
                throw new DuplicityError('user already exists')

                throw error
        })
}

module.exports = registerUser