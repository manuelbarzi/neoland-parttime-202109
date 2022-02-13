const { users } = require('../managers')
const { User } = require('../models')

function registerUser(name, email, password){
    //validateName
    //ValidateEmail
    //Password

    return users.findByEmail(email)
        .then(user => {
            if(user) throw new Error('user already exists!')

            user = new User (`USER-${Date.now()}`, name, email, password)

            return users.save(user)
        })
}

module.exports = registerUser