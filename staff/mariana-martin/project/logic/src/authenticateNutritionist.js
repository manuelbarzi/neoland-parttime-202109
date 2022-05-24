const { models: { User }} = require('data')
const { validators: { validateEmail, validatePassword },
        errors: { AuthError }} = require('commons')
const bcrypt = require('bcryptjs')

function authenticateNutritionist(email, password){
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(nutritionist => {
            if(!nutritionist) throw new AuthError('wrong credentials')

            return bcrypt.compare(password, nutritionist.password)
                .then(match => {
                    if(!match) throw new AuthError('wrong credentials')

                    return nutritionist.id
                })
        })
}

module.exports = authenticateNutritionist
   