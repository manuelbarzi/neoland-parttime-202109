const {models :  {User}  } = require('data')
const { validators: {validateId} , errors: { NotFoundError, AuthError }} = require('commons')

/**
 * returns an object with data from a specific developer
 * 
 * @param {string} developerId id from developer
 * 
 * 
 * @throws {NotFoundError} When developer is not found
 * @throws {AuthError} when user returned is not a developer
 * 
 * @return {object} Returns an object with developer data
 */

function retrieveUser(developerId){
    validateId(developerId)

    return  User.findById(developerId).lean()
        .then(developer => {
            if (!developer) throw new NotFoundError("developer not found");

            if(developer.role !==1) throw new AuthError('user is not a developer')
            
            developer.id = developer._id.toString()

            delete developer._id
            delete developer.__v
            
            return developer
        })
}

module.exports = retrieveUser