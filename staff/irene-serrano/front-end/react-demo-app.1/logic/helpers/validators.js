function validateUsername(username){
    if (typeof username !== 'string') throw new TypeError('username is not string')
    if (!username.trim()) throw new Error('Username is empty or blank. Please, write your username')
}
function validatePassword(password){
    if (typeof password !== 'string') throw new TypeError( 'password is not string')
    if (!password.trim()) throw new Error('Wrong password')
}
function validateEmail(email){
    if (typeof email !== 'string') throw new TypeError( 'email is not string')
    if (!email.trim()) throw new Error('E-mail is empty. Please, type a valid e-mail')

}
function validateCity(city){
    if (typeof city !== 'string') throw new TypeError('city is not string')
    if (!city.trim()) throw new Error('City is empty. Please, write a city')

}
function validateToken(token){
    if (typeof token !== 'string') throw new TypeError('token is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')

}
function validateCallback(callback){
    if (typeof callback !== 'function') throw new TypeError( 'callback is not a function')

}
function validateApikey(apiKey){
    if (typeof apiKey !== 'string') throw new TypeError( 'apiKey is not string')
    if (!apiKey.trim()) throw new Error('api key is empty or blank')

}
function validateId(id){
    if(typeof id !== 'string') throw new TypeError('id is not string')
    if(!id.trim()) throw new Error('id is empty or blank')
}
function validateQuery(query){
    if(typeof query !== 'string' ) throw new TypeError( 'query is not a string')
    if(!query.trim()) throw new Error('query is empty or blank')
}