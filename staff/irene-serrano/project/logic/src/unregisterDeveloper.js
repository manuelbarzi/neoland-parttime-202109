const {models : { User } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

/**
 * Set developer state to deactovated, what means that wont have access
 * 
 * @param {string} developerId developer that wants to deactivate user
 * 
 * @throws {NotFoundError} developer not found on database
 * 
 */

function unregisterDeveloper(developerId){
    validateId(developerId, 'developer id')

    return User.updateOne({_id: developerId}, { active: false })
    .then(result => {
        const { modifiedCount } = result

        if (modifiedCount === 0)
            throw new NotFoundError(`user not found`)
    })
}

module.exports = unregisterDeveloper