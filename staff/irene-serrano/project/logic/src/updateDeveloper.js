const {models : { User } } = require('data')
const { validators: { validateString, validateId }, errors: { NotFoundError } } = require('commons')

/**
 * Updates data from a develoepr
 * 
 * @param {string} companyId company that wants to deactivate user
 * @param {string} name new company name
 * @param {string} description new company description
 * @param {string} stack new company stack
 * @param {string} location new company location
 * @param {string} link new company link
 * 
 * @throws {NotFoundError} company or offers not found on database
 */

function updateDeveloper(developerId, name, description, stack, location, link) {
    validateId(developerId)
    validateString(name, 'name')
    validateString(description, 'description')
    location ? validateString(location, 'location') : null
    stack ? validateString(stack, 'stack') : null
    link ? validateString(link, 'link') : null

    return User.updateOne({ _id: develoeprId }, { name, description, stack, location, link })
        .then(result => {

            const { updatedCount } = result

            if (updatedCount === 0)
                throw new NotFoundError(`developer not found`)
        })
}

module.exports = updateDeveloper