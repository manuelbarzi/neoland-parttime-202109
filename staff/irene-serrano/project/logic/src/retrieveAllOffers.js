const { models: { Offer } } = require('data')
const { errors: { NotFoundError } } = require('commons')

/**
 * returns an array of all offers, depending on what filter is passed by
 * 
 * @param {object} filter An object build with users requests that filters the offers. 
 * Not mandatory, if is not especified, returns all offers
 * 
 * @throws {NotFoundError} When developer is not found
 * 
 * @return { [object] } Returns an array with all developer objects that user is active
 */

function retrieveAllOffers(filter) {
  return Offer.find(filter)
    .then(offers => {
      if (offers.length === 0) throw new NotFoundError('cant find any offer')
      return offers.map(offer => {
        const doc = offer._doc
        
        doc.id = doc._id.toString()
          delete doc._id
          delete doc.__v
          return doc

      })
    })
}

module.exports = retrieveAllOffers