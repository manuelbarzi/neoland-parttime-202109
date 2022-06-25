const { models: { User, Offer } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

/**
 * returns an object with data from developer that have applied to an offer
 * 
 * @param {string} offerId id from offer that wants de
 * @param {string} requestId id from request from an offer
 * 
 * @throws {NotFoundError} When developer is not found
 * 
 * @return {object} Returns an object with developer data (name, requestId, seen, rejected and contacted)
 */

function retrieveCandidate (offerId, requestId) {
    validateId(requestId, 'request id')
    validateId(offerId, 'offer id')
    let currentRequest = {}

    return Offer.findById(offerId).lean()
        .then((offer) => {
            if (!offer) throw new NotFoundError(`offer not found`)
            if(offer.active === false) throw new NotFoundError('offer no longer exists')

            const { requests } = offer
            const requestIndex =  requests.findIndex((request)=> request._id.toString() === requestId)
            
            if(requestIndex === -1 ) throw new NotFoundError(`request not found`)

            currentRequest = requests[requestIndex]
            const developerId = currentRequest.developer.toString()

            return User.findById({_id: developerId}).lean()
                .then(dev=>{
                    if(!dev) throw new NotFoundError('cant find this user')
                    if(dev.active === false) throw new NotFoundError('user no longer exists')

                    currentRequest.developerName = dev.name

                    currentRequest.id = currentRequest._id.toString()
                    currentRequest.developerId = currentRequest.developer.toString()
                   
                    delete currentRequest.developer
                    delete currentRequest._id

                    return currentRequest
                })
         })
}

module.exports = retrieveCandidate