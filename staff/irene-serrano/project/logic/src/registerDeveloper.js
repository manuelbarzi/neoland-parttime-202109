const {models :  {User}  } = require('data')

const {
    validators: {
        validateString,
        validatePassword
    },
    errors: {
        DuplicityError
    }
} = require('commons')
const bcrypt = require('bcryptjs')

/**
 * Creates a user with developer role
 * 
 * @param {string} name Name of the developer
 * @param {string} email developer email to log in
 * @param {string} password developer password
 * @param {string} description developer description, history, culture, achivements...
 * @param {string} stack stack that developer want to work with
 * @param {string} location developer base location
 * @param {string} link link to personal webpage, github...
 *
 * @throws {DuplicityError} Already exist an user with same email in database
 */

function registerDeveloper (role = 1 , name, email, password, description, stack, location, link ){
    validateString(name, 'name') 
    validateString(email, 'email') 
    validatePassword(password)
    validateString(description, 'description')
    location? validateString(location, 'location') : null
    stack? validateString(stack, 'stack') : null
    link? validateString(link, 'link') : null
   
    return bcrypt.hash(password, 10)
            .then(hash => User.create({  role, name, email, password: hash, description, stack, location, link  }))
            .then(developer => { })
            .catch(error => {
                if (error.message.includes('duplicate'))
                    throw new DuplicityError('developer already exists')
    
                throw error
            })

}
module.exports = registerDeveloper