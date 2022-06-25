const {models : { User } } = require('data')
const {
    validators: { validateString, validatePassword },
    errors: { DuplicityError } 
} = require('commons')
const bcrypt = require('bcryptjs')

/**
 * Creates a user with company role
 * 
 * @param {string} name Name of the company
 * @param {string} email company email to log in
 * @param {string} password company password
 * @param {string} description company description, history, culture, achivements...
 * @param {string} stack must be null
 * @param {string} location company base location
 * @param {string} link link to official webpage
 *
 * 
 * @throws {DuplicityError} Already exist an user with same email in database
 */

function registerCompany ( role = 2, name, email, password, description, stack, location, link ){
    validateString(name, 'name') 
    validateString(email, 'email') 
    validatePassword(password)
    validateString(description, 'description')   
    location? validateString(location, 'location') : null
    stack? validateString(stack, 'stack') : null
    link? validateString(link, 'link') : null
 
    return bcrypt.hash(password, 10)
            .then(hash => User.create({ role, name, email, password: hash, description, stack : null, location, link  }))
            .then(company => { })
            .catch(error => {
                if (error.message.includes('duplicate'))
                    throw new DuplicityError('company already exists')
    
                throw error
            })
 

   

}
module.exports = registerCompany