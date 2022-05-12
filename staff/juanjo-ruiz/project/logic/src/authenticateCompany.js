const { models: { Company } } = require('data')
const bcrypt = require('bcryptjs')
const { validators: { validateEmail, validatePassword }, errors: { AuthError } } = require('commons')

function authenticateCompany(email, password) {
        validateEmail(email)
        validatePassword(password)

        return Company.findOne({ email })
            .then(company => {
                if (!company) throw new AuthError(`email don't exists`)

                return bcrypt.compare(password, user.password)
                    .then(match => {
                        if (!match) throw new AuthError('wrong credentials')

                        return company.id
                    })
            })
    }

module.exports = authenticateCompany