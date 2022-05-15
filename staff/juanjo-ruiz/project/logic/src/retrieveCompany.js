const { models: { Company } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveCompany(companyId) {
    validateId(companyId, 'company id')

    return Company.findById(companyId).lean()
        .then(company => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)

            company.id = company._id.toString()
            
            delete company._id
            delete company.__v
            delete company.password

            return company
        })
}

module.exports = retrieveCompany