const { models: { User, Offer }} = require('data')
const { 
    validators: { validateId},
    errors: { NotFoundError, AuthError }
} = require('commons')

/**
 * Activates offer in the platform 
 * 
 * @param {string} companyId The id of the company that requests the activation
 * @param {string} offerId The offer to be activated
 * 
 * @throws {NoFoundError} WHen company or offer is not found
 * @throws {AuthError} When company does not correspond to the offer
 */


function activateOffer(companyId, offerId ) {
    validateId(companyId, 'company id')
    validateId(offerId, 'offer id')

    return Promise.all([User.findById(companyId), Offer.findById(offerId)])
        .then(([company, offer]) => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)
            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)

            if (offer.company.toString() !== companyId) throw new AuthError(`offer with id ${offerId} does not belong to company with id ${companyId}`)

          offer.active = true
            
            return offer.save()
        })
        .then(offer => {})
}

module.exports = activateOffer