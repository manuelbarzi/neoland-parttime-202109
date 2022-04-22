//TO DO: name, email, password, id/objectId, note Text, note color, note public
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

function validateName (name){
    if (typeof name !== 'string') throw new TypeError('Name is not string')
    if (!name.trim()) throw new Error('username is empty or blank')
}

function validateEmail (email){
    if (typeof email !== 'string') throw new TypeError('email is not string')
    if (!email.trim()) throw new Error('username is empty or blank')
   // if (EMAIL_REGEX.test(email) )throw new Error('invalid email JODER')
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

module.exports = {
    validateEmail, validateName, validatePassword, validateId, validateToken
}