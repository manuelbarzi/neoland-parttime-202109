//REGEX, para validad emails:

//const EMAIL_REGEX = /[a-z]+\@[a-z]+\.[a-z]+/i // it doesn't work for so many other cases... :/
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const { FormatError } = require('./errors')

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name is not string')
    if (!name.trim()) throw new FormatError('name is empty or blank')
}

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('email is not string')
    if (!email.trim()) throw new FormatError('email is empty or blank')
    if (!EMAIL_REGEX.test(email)) throw new FormatError('invalid email')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password is not string')
    if (!password.trim()) throw new FormatError('password is empty or blank')
    if (password.trim().length < 8) throw new FormatError('password length is smaller than 8 characters')
}

function validateCallback(callback) {
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
}

function validateToken(token) {
    if (typeof token !== 'string') throw new TypeError('token is not string')
    if (!token.trim()) throw new FormatError('token is empty or blank')

    const parts = sessionStorage.token.split('.')  //separas un string y regresa un array ya separado

    if (parts.length !== 3) throw new FormatError('invalid token')  

    const [, payload64] = parts  //me interesa sólo el 2do argumento de ese array

    const payloadJson = atob(payload64)   //atobe (convierte a base64 a texto original)

    const payload = JSON.parse(payloadJson)  //la conversión lo parsea a Json a objeto payload

    if (Math.round(Date.now() / 1000) > payload.exp) throw new Error('token expired') //si el tiempo en segundos es más grande que la fecha que se sacó el token (respecto a 1970)
}

function validateId(id, explain = 'id') {  //explain (2do paramentro)nos permite definir a qué id se refiere(cuando tenemos varios, ex. userId ownerId)
    if (typeof id !== 'string') throw new TypeError(`${explain} is not string`)
    if (!id.trim()) throw new FormatError(`${explain} is empty or blank`)
    if (id.length !== 24) throw new FormatError(`invalid ${explain}`)
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
    validateString,
    validateBoolean
}