// EXPRESIONES REGULARES
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const { FormatError } = require('./errors')

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('Email is not string')
    if (!email.trim()) throw new FormatError('email is empty or blank')
    if (!EMAIL_REGEX.test(email)) throw new FormatError('Invalid email')
}

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('Name is not string')
    if (!name.trim()) throw new FormatError('Name is empty or blank')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('Password is not string')
    if (!password.trim()) throw new FormatError('Password is empty or blank')
    if (password.trim().length < 8) throw new FormatError('Password length is smaller than 8 characters')
}

function validateToken(token) {
    if (typeof token !== 'string') throw new TypeError('Token is not string')
    if (!token.trim()) throw new FormatError('Token is empty or blank')

    const parts = sessionStorage.token.split('.') // lo divimos en las 3 partes que tiene un token
    if (parts.length !== 3) throw new FormatError('invalid token')

    const [, payload64] = parts // cogemos la segunda parte del token, que es el payload

    const payloadJson = atob(payload64) //lo convertimos a json de base64

    const payload = JSON.parse(payloadJson) // parseamos el json

    if (Math.round(Date.now() / 1000) > payload.exp) throw new Error('token expired')
}

function validateId(id, explain = 'id') {
    if (typeof id !== 'string') throw new TypeError(`${explain} is not string`)
    if (!id.trim()) throw new FormatError(`${explain}is empty or blank`)
    if (id.length !== 24) throw new FormatError(`Invalid ${explain}`)
}

function validateString(string, explain = 'string') {
    if (typeof string !== 'string') throw new TypeError(`${explain} is not string`)
    if (!string.trim()) throw new FormatError(`${explain} is empty or blank`)
}

function validateBoolean(boolean, explain = 'boolean') {
    if (typeof boolean !== 'boolean') throw new TypeError(`${explain} is not boolean`)
}

function validateRange(number, explain = '0') {
    if (typeof number > 5) throw new TypeError(`${explain} is not posible, numbers between 0 and 5`)
}

module.exports = {
    validateEmail,
    validateName,
    validatePassword,
    validateToken,
    validateId,
    validateBoolean,
    validateString,
    validateRange
}