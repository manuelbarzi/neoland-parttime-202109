function ValidateName(name){
    if (typeof name !== 'string') throw new TypeError(name + ' is not string')
    if (!name.trim()) throw new Error('name is empty or blank')
}

function ValidateUsername(username){
    if (typeof username !== 'string') throw new TypeError(username + ' is not string')
    if (!username.trim()) throw new Error('username is empty or blank')
}

function ValidatePassword(password){
    if (typeof password !== 'string') throw new TypeError(password + ' is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 8) throw new Error('password length is smaller than 8 characters')
}

function ValidateCallback(callback){
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
}