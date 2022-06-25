const {models :  {Request, Offer, User}  } = require('data')
const {
    validators: {
        validateId
    },
    errors: {
        DuplicityError,
        NotFoundError
    }
} = require('commons')

/**
 * Add a request from a candidate to an offer 
 * 
 * @param {string} developerId The id of the developer that applies to the offer
 * @param {string} offerId The id of the offer 
 * 
 * @throws {NoFoundError} WHen developer or offer is not found
 * @throws {DuplicityError} when developer already applied to the offer
 * 
 */

function addOfferRequest ( offerId, developerId ){
    validateId(offerId) 
    validateId(developerId)
        
    return User.findById(developerId)
        .then(developer => {
            if (!developer) throw new NotFoundError(`developer not found`)
    
            return Offer.findById(offerId)
            .then(offer => {
                if (!offer) throw new NotFoundError(`offer not found`)
                if(offer.requests.some(request=> { 
                    const existingRequestDeveloperId = request.developer.toString() 
                    return existingRequestDeveloperId === developerId }))throw new DuplicityError(`user with id ${developerId} already applied to this offer`)

                const request =  Request({developer: developerId})
                offer.requests.push(request)

                return offer.save()
        })
      
        .then(offer => { })
    })
}

module.exports = addOfferRequest