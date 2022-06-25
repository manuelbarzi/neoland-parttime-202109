const { models: { User, Offer }} = require('data')
const { validators: { validateId }, errors: { AuthError, NotFoundError }} = require('commons')

/**
 * Deletes definitively an offer from the system
 * 
 * @param {string} companyId The id of the company that wants to delete an offer
 * @param {string} offerId The offer to be deleted
 * 
 * @throws {NotFoundError} When company or offer is not found
 * @throws {AuthError} When company does not correspond to the offer
 */

function deleteOffer(companyId, offerId) {
    validateId(companyId, 'company id')
    validateId(offerId, 'offer id')

    return Promise.all([User.findById(companyId), Offer.findById(offerId)])
        .then(([company, offer]) => {
            if (!company) throw new NotFoundError(`company not found`)
            if (!offer) throw new NotFoundError(`offer not found`)

            if (offer.company.toString() !== companyId) throw new AuthError(`offer does not belong to company`)  
            
            return Offer.deleteOne({ _id: offerId })
        })
        .then(() => {})
}

module.exports = deleteOffer