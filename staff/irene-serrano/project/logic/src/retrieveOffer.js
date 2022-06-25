const { models: { User, Offer } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

/**
 * returns an object with data from a specific offer
 * 
 * @param {string} companyId id from company
 * @param {string} offerId id from offer that is requested
 * 
 * 
 * @throws {NotFoundError} When company or offer is not found
 * 
 * @return {object} Returns an object with offer data
 */

function retrieveOffer (companyId, offerId) {
    validateId(companyId, 'company id')
    validateId(offerId, 'offer id')

    return Promise.all([User.findById(companyId).lean(), Offer.findById(offerId).lean().populate('company')])
        .then(([company, offer]) => {
            if (!company) throw new NotFoundError(`company not found`)
            if (!offer) throw new NotFoundError(`offer not found`)

            offer.id = offer._id.toString()
            offer.companyId = offer.company._id.toString()
            offer.companyName = offer.company.name

            delete offer._id
            delete offer.__v
            delete offer.company

            return offer
        })
}

module.exports = retrieveOffer