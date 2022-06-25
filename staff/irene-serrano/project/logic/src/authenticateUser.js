const { models:  {User} } = require('data')
const {
    validators: {
        validateEmail,
        validatePassword
    },
    errors : { AuthError,  NotFoundError }
} = require('commons')
const bcrypt = require('bcryptjs')

/**
 * Authenticates an user
 * 
 * @param {string} email user email
 * @param {string} password password 
 * 
 * @throws {NoFoundError} When email does not exist in database
 * @throws {AuthError} when email exist but password not macth or user is deactivated
 * 
 * @return {{id, role}} returns id and role for token
 */

function authenticateUser( email, password){
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then( user => {
            if (!user) throw new NotFoundError ('email does not exists')
            if(user.active === false) throw new AuthError('user deactivated')

            return bcrypt.compare(password, user.password)
                .then(match => {
                    if (!match) throw new AuthError('wrong credentials')
                    return {id: user.id, role: user.role}
                })
        })
}
module.exports = authenticateUser