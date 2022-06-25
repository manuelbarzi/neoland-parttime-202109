const { models: { User, Offer} } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

/**
 * Set company state to deactovated, what means that wont have access
 * 
 * @param {string} companyId company that wants to deactivate user
 * 
 * @throws {NotFoundError} company or offers not found on database
 * 
 */

function unregisterCompany(companyId) {
    validateId(companyId, 'company id')

    return User.updateOne({ _id: companyId }, { active: false })
        .then(result => {
            const { modifiedCount } = result
            if (modifiedCount === 0) throw new NotFoundError(`company not found`)

            Offer.updateMany({company: companyId}, {active: false})
            .then(result => {
                const { modifiedCount } = result
                if (modifiedCount === 0) throw new NotFoundError(`not found any offer from company`)
                })
            })
}

module.exports = unregisterCompany