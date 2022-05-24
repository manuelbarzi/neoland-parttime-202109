const { models: { User }} = require('data')
const { validators: { validateEmail, validatePassword },
        errors: { AuthError }} = require('commons')
const bcrypt = require('bcryptjs')

function authenticatePatient(email, password){
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(patient => {
            if(!patient) throw new AuthError('wrong credentials')

            return bcrypt.compare(password, patient.password)
                .then(match => {
                    if(!match) throw new AuthError('wrong credentials')

                    return patient.id
                })
        })
}

module.exports = authenticatePatient