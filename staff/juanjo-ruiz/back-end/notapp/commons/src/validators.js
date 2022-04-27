//const EMAIL_REGEX = /[a-z]+\@[a-z]+\.[a-z]+/i // too simple
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
    if (password.trim().length < 8) throw new Error('password length is smaller than 8 characters')
}

function validateCallback(callback) {
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
}

function validateToken(token) {
    if (typeof token !== 'string') throw new TypeError('token is not string')
    if (!token.trim()) throw new Error('token is empty or blank')

    const parts = sessionStorage.token.split('.')

    if (parts.length !== 3) throw new Error('invalid token')

    const [, payload64] = parts

    const payloadJson = atob(payload64)

    const payload = JSON.parse(payloadJson)

    if (Math.round(Date.now() / 1000) > payload.exp) throw new Error('token expired')
}

function validateId(id, explain = 'id') {
    if (typeof id !== 'string') throw new TypeError(`${explain} is not string`)
    if (!id.trim()) throw new Error(`${explain} is empty or blank`)
    if (id.length !== 24) throw new Error(`invalid ${explain}`)
}

function validateText(text) {
    if (typeof text !== 'string') throw new TypeError('text is not string')
    if (!text.trim()) throw new Error('text is empty or blanck')
}

function validateColor(color) {
    if (typeof color !== 'string') throw new TypeError('color is not string')
    if (!color.trim()) throw new Error('color is empty or blanck')
}

function validateQuery(query) {
    if (typeof query !== 'string') throw new TypeError('query is not string')
    if (!query.trim()) throw new TypeError('query is empty or blanck')
}

function validateDate(date) {
    if (typeof date !== Date) throw new TypeError('date is not date')
}

function validateString(string, explain = 'string') {
    if (typeof string !== 'string') throw new TypeError(`${explain} is not string`)
    if (!string.trim()) throw new FormatError(`${explain} is empty or blank`)
}

function validateBoolean(boolean, explain = 'boolean') {
    if (typeof boolean !== 'boolean') throw new TypeError(`${explain} is not boolean`)
}

module.exports = {
    validateName,
    validateEmail,
    validatePassword,
    validateCallback,
    validateToken,
    validateId,
    validateText,
    validateColor,
    validateQuery,
    validateDate,
    validateString,
    validateBoolean
}