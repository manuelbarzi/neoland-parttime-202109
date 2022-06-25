const { models: { User, Offer } } = require('data')
const { validators: { validateString, validateSalary } } = require('commons')

/**
 * Activates offer in the platform 
 * 
 * @param {string} companyId The id of the company that owns the offer
 * @param {string} title offer title
 * @param {string} description description of the position, musts, salary, job conditions...
 * @param {string} stack stack on which the job tasks are focused
 * @param {string} minSalary minimun salary offered
 * @param {string} maxSalary maximun salary offered
 * @param {string} location city where the position is
 * @param {string} publicationDate time and date when the offer is created
 * 
 *  
 * @throws {NoFoundError} WHen company is not found
 * @throws {AuthError} When user is not a company
 */

function createOffer(companyId, title, description, stack, minSalary, maxSalary, location, publicationDate = Date.now()) {

    validateString(title, 'title')
    validateString(description, 'description')
    validateString(stack, 'stack')
    validateString(location, 'location')
    validateSalary(minSalary, 'minSalary')
    validateSalary(maxSalary, 'maxSalary')

    return User.findById(companyId)
        .then(company => {
            if (!company) throw new NotFoundError(`company not found`)
            if (company.role !== 2) throw new AuthError(`user does not have permission to create an offer`)

            return Offer.create({ company: companyId, title, description, stack, minSalary, maxSalary, publicationDate, location })
        })
        .then(offer => { })
}

module.exports = createOffer