const { models: {User} } = require("data")
const { errors: {NotFoundError} } = require('commons')

/**
 * returns an array of all developers (role = 1) and the user is active
 * 
 * @throws {NotFoundError} When developer is not found
 * 
 * @return { [object] } Returns an array with all developer objects that user is active
 */

function retrieveAllDevelopers(){
 
    return  User.find( {role: 1, active: true} ).lean()
        .then(developers => {
          
            if(developers.length === 0) throw new NotFoundError('cant find any developer')

            return developers.map(developer => {
            

                developer.id = developer._id.toString()
                delete developer._id
                delete developer.__v
                
                return developer
                })
            })
}

module.exports = retrieveAllDevelopers