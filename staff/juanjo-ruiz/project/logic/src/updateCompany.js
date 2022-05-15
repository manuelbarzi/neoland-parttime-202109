const { models: { Company } } = require('data')
const { validators: { validateId, validateString, validateEmail, validateCif }, errors: { NotFoundError } } = require('commons')

function updateCompany(companyId, businessName, cif, name, email) {
    validateId(companyId, 'company id')
    validateString(businessName, 'business name')
    validateCif(cif)
    validateString(name, 'name')
    validateEmail(email)

    return Company.updateOne({ _id: companyId }, { businessName, cif, name, email })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0)
                throw new NotFoundError(`company with id ${companyId} not found`)
        })
}

module.exports = updateCompany
