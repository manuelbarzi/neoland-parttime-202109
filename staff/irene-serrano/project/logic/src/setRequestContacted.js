const { models: { User, Offer } } = require('data')
const { validators: { validateId }, errors: { NotFoundError, AuthError } } = require('commons')

/**
 * Sets the property 'contacted' true after send a contact email to developer
 * 
 * @param {string} requestId request id that match developer and offer
 * @param {string} offerId id from offer that developer has applied
 * @param {string} companyId copmany that own the offer
 * 
 * @throws {AuthError} when user is not a company or offer does not belong to company
 * @throws {NotFoundError} request not found on database
 * 
 */

function setRequestContacted(companyId, offerId, requestId ){
    validateId(requestId, 'request id')
    validateId(companyId, 'company id')
    validateId(offerId, 'offer id')

    return Promise.all([
        User.findById(companyId),
        Offer.findById(offerId)
    ])
    .then( res =>{
        const [company, offer] = res
        if (company.role !== 2) throw new AuthError('user is not a company')
        if (offer.company.toString() !== companyId)  throw new AuthError(`offer doesnt belongs to company`)

        const { requests } = offer
        const requestIndex =  requests.findIndex((request)=> request.id === requestId)
        
        if(requestIndex === -1 ) throw new NotFoundError(`request not found`)
        
        const contactedRequest = requests[requestIndex]

        contactedRequest.contacted = true
        
        return Offer.updateOne({_id: offerId},{"requests": requests})
            .then(result=>{
                const { matchedCount } = result
        
                if (matchedCount === 0)
                throw new NotFoundError(`request not found`)
        
            })
        })
        .then((offerId)=>{ })
        
    }

module.exports = setRequestContacted