const { User } = require('../../models')

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('invalid email')
}

function validateUsername(username) {
    if (typeof username !== 'string') throw new TypeError('username is not string')
    if (!username.trim()) throw new Error('username is empty or blank')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 8) throw new Error('password length is smaller than 8 characters')
}

function validateId(id) {
    if (typeof id !== 'string') throw new TypeError('id is not string')
    if (!id.trim()) throw new Error('id is empty or blank')
}

module.exports = {
    validateEmail,
    validateUsername,
    validatePassword,
    validateId
}