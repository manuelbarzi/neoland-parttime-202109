const { models: { User } } = require('data')
const {validators: {validateId}, errors: { NotFoundError }} = require('commons')

function retrieveUser(userId) {
    validateId(userId, 'user id')
    
    return User.findById(userId).lean()
        .then(user => {
            if(!user) throw new NotFoundError(`user with id ${userId} not found`)
            
            //sanitize
            user.id = user._id.toString()
            delete user._id

            delete user.password

            delete user.__v
            
            return user
        })
}

module.exports = retrieveUser