const { models: { Company } } = require('data')
const { validators: { validateId, validatePassword }, errors: { NotFoundError, AuthError } } = require('commons')
const bcrypt = require('bcryptjs')

function unregisterCompany(companyId, password) {
    validateId(companyId, 'company id')
    validatePassword(password)

    return Company.findOne({ companyId })
        .then(company => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)

            return bcrypt.compare(password, company.password)
        })
        .then(match => {
            if (!match) throw new AuthError('wrong credentials')

            return Company.deleteOne({ _id: companyId })
                .then(result => {
                    const { deletedCount } = result

                    if (deletedCount === 0)
                        throw new Error(`could not delete company with id ${companyId}`)
                })
        })


}

module.exports = unregisterCompany