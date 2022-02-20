const { validateEmail, validatePassword } = require('./helpers/validators')
const { User } = require('data')


function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)


    
    return User.findByEmail(email)
        .then(user => {
            if(!user) throw new Error('user does not exist!')

            if(user._doc.password !== password) throw new Error('password is incorrect!')

            return user._doc.id   //nos devuelve el id del usuario sitodo va bien
        })

}

module.exports = authenticateUser