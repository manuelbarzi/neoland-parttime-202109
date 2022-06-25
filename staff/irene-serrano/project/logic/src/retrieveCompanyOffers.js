const { models: { Offer } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')
const { validateBoolean } = require('commons/src/validators')

/**
 * returns an object with data from a specific company
 * 
 * @param {string} companyId id from company requested
 * @param {string} active a boolean passed by. 
 * Not mandatory, if active === false, is used from the company that owns the offers.
 * Else, used from developer-sside to show other offers at company profile.
 * 
 * @throws {NotFoundError} When company is not found
 * 
 * @return {object} Returns an object with all company offers, active or not, as requested.
 */

function retrieveCompanyOffers (companyId, active) {
    validateId(companyId)
    if(active) validateBoolean(active)

    let filter = {}

    active === true?  (filter = { 
        "company": companyId,  
        "active": true 
    }) : ( filter = { 
        "company": companyId
    })
   
    return  Offer.find(filter)
        .then(offers => {
            if(offers.length === 0) throw new NotFoundError(`not found any offer from company`)
            
            return offers.map(offer => {
                const doc = offer._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v
                
                return doc
            })
        })
}

module.exports = retrieveCompanyOffers