const { models: { User, Offer }} = require('data')
const { 
    validators: { validateId, validateBoolean },
    errors: { NotFoundError, AuthError }
} = require('commons')

/**
 * Deactivates offer in the platform 
 * 
 * @param {string} companyId The id of the company that requests the deactivation
 * @param {string} offerId The offer to be deactivated
 * 
 * @throws {NoFoundError} When company or offer is not found
 * @throws {AuthError} When company does not correspond to the offer
 */

function deactivateOffer(companyId, offerId ) {
    validateId(companyId, 'company id')
    validateId(offerId, 'offer id')

    return Promise.all([User.findById(companyId), Offer.findById(offerId)])
        .then(([company, offer]) => {
            if (!company) throw new NotFoundError(`company not found`)
            if (!offer) throw new NotFoundError(`offer not found`)

            if (offer.company.toString() !== companyId) throw new AuthError(`offer does not belong to company`)

          offer.active = false
            
            return offer.save()
        })
        .then(offer => {})
}

module.exports = deactivateOffer

