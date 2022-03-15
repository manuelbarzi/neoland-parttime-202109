// EXPRESIONES REGULARES
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i


function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('Email is not string')
    if (!email.trim()) throw new Error('email is emnpty or blank')
    if (!EMAIL_REGEX.test(email)) throw new Error('Invalid email')
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

function validateToken(token) {
    if (typeof token !== 'string') throw new TypeError('Token is not string')
    if (!token.trim()) throw new Error('Token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('Invalid token')
}

function validateId(id) {
    if (typeof id !== 'string') throw new TypeError('Id is not string')
    if (!id.trim()) throw new Error('Id is empty or blank')
    if (id.length !== 24) throw new Error('Invalid id')
}

module.exports = {
    validateEmail,
    validateName,
    validatePassword,
    validateToken,
    validateId
}