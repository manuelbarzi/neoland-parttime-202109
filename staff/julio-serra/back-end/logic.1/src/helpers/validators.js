function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('Email is not string')
    if(!email.trim()) throw new Error('email is emnpty or blank')
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
    validateEmail,
    validateName,
    validatePassword
}