function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name is not string')
    if (!name.trim()) throw new Error('name is empty or blank')
}

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('email is not string')
    if (!email.trim()) throw new Error('email is empty or blank')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 8) throw new Error('password length is smaller than 8 characters')
}

module.exports = {
    validateName,
    validateEmail,
    validatePassword
}