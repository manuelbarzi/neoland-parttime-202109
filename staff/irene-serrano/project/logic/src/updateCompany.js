const {models : { User } } = require('data')
const { validators: { validateString, validateId }, errors: { NotFoundError } } = require('commons')

/**
 * Updates data from a company
 * 
 * @param {string} companyId company that wants to deactivate user
 * @param {string} name new company name
 * @param {string} description new company description
 * @param {string} location new company location
 * @param {string} link new company link
 * 
 * @throws {NotFoundError} company or offers not found on database
 */

function updateCompany(companyId, name, description, location, link ){
    validateId(companyId)
    validateString(name, 'name')
    validateString(description, 'description')
    location ? validateString(location, 'location') : null
    link ? validateString(link, 'link') : null

    return User.updateOne({_id: companyId}, {name, description, location, link})
        .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new NotFoundError(`company not found`)
        })
}

module.exports = updateCompany
