//const EMAIL_REGEX = /[a-z]+\@[a-z]+\.[a-z]+/i 
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name is not string')
    if (!name.trim()) throw new Error('name is empty or blank')
}

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('email is not string')
    if (!email.trim()) throw new Error('email is empty or blank')
    if (!EMAIL_REGEX.test(email)) throw new Error('invalid email')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 5) throw new Error('password length is smaller than 5 characters')
}

function validateCallback(callback) {
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
}

function validateToken(token) {
    if (typeof token !== 'string') throw new TypeError('token is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')
}

function validateId(id, explain = 'id') {
    if (typeof id !== 'string') throw new TypeError(`${explain} is not string`)
    if (!id.trim()) throw new Error(`${explain} is empty or blank`)
    if (id.length !== 24) throw new Error(`invalid ${explain}`) //id de Mongo = 24 caracteres
}

module.exports = {
    validateName,
    validateEmail,
    validatePassword,
    validateCallback,
    validateToken,
    validateId
}