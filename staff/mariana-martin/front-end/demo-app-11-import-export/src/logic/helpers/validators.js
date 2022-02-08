function validateToken(token){
    if (typeof token !== 'string') throw new TypeError('token is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')
}

function validateCallback(callback){
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
}

function validateName(name){
    if (typeof name !== 'string') throw new TypeError ('name is not a string')
    if (!name.trim()) throw new Error ('name is empty or blank')
}

function validateUsername(username){
    if (typeof username !== 'string') throw new TypeError('username is not string')
    if (!username.trim()) throw new Error('username is empty or blank')  
}

function validatePassword(password){
    if (typeof password !== 'string') throw new TypeError('password is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 6) throw new Error('password length is smaller than 6 characters')   
}

function validateCity(city){
    if(typeof city !== 'string') throw new TypeError('city is not string')
    if(!city.trim()) throw new Error('city is empty or blank')
}

function validateCountry(country){
    if(typeof country !== 'string') throw new TypeError('country is not a string')
    if(!country.trim()) throw new Error ('cpuntry is empty or blank')
}

function validateId(id){
if(typeof id !== 'string') throw new TypeError('id is not a string')
    if(!id.trim()) throw new Error('id is empty or blank')
}

export {
    validateToken,
    validateCallback,
    validateName, 
    validateUsername, 
    validatePassword, 
    validateCity, 
    validateCountry, 
    validateId
}