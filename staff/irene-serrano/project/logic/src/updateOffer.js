const { models: { User, Offer }} = require('data')
const { 
    validators: { validateId, validateString, validateSalary },
    errors: { NotFoundError, AuthError }
} = require('commons')

/**
 * Updates data from a offer
 * 
 * @param {string} companyId offer that wants to update the offer
 * @param {string} offerId offer to update
 * @param {string} title new offer title
 * @param {string} description new offer description
 * @param {string} stack new offer stack
 * @param {number} minSalary new offer minimun salary
 * @param {number} maxSalary new offer maximun salary 
 * @param {string} location new offer location

 * 
 * @throws {NotFoundError} company or offers not found on database
 */

function updateOffer(companyId, offerId, title, description, stack, minSalary, maxSalary, location) {
    validateId(companyId, 'company id')
    validateId(offerId, 'offer id')
    validateString(title, 'title')
    validateString(description, 'description')
    validateString(location, 'location')
    validateString(stack, 'stack')
    validateSalary(minSalary, 'minSalary')
    validateSalary(maxSalary, 'maxSalary')

    return Promise.all([User.findById(companyId), Offer.findById(offerId)])
        .then(([company, offer]) => {
            if (!company) throw new NotFoundError(`company not found`)
            if (!offer) throw new NotFoundError(`offer not found`)
            if (offer.company.toString() !== companyId) throw new AuthError(`offer does not belong to company`)

            offer.title = title
            offer.description = description
            offer.stack = stack
            offer.minSalary = minSalary
            offer.maxSalary  = maxSalary
            offer.location = location
    
            return offer.save()
        })
        .then(offer => {})
}

module.exports = updateOffer