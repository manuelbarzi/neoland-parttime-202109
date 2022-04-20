const { User } = require('../../models')

function validateUser(user) {
    if (user instanceof User === false) throw new TypeError('Invalid user')
}

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('Email is not string')
}

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('Name is not string')
    if (!name.trim()) throw new Error('Name is empty or blank')
}


function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('Password is not string')
    if (!password.trim()) throw new Error('Password is emppty or blank')
    if (password.trim().length < 8) throw new Error('Password length is smaller than 8 characters')
}


module.exports = {
    validateUser,
    validateEmail,
    validateName,
    validatePassword
}