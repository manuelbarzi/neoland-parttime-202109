const { User } = require('../../models')

function validateUser(user) {
    if (user instanceof User === false) throw new TypeError('invalid user')
}

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('invalid email')
}

module.exports = {
    validateUser,
    validateEmail
}
