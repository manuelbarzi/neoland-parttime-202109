function valideteUsername(username){
    if (typeof username !== 'string') throw new TypeError('username is not string')
    if (!username.trim()) throw new Error('username is empty or blank')
}

function validatePassword(password){
    if (typeof password !== 'string') throw new TypeError('password is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 5) throw new Error('password length is smaller than 5 characters')
}

function validateCallback(callback){
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
}

//Sabemos que el token es un string, que está compuesto por 3 partes separadas por 2 puntos--split nos devuelve un array cada vez que encuentra un punto, por ello le decimos que la longitud tiene que ser igual a 3 = tiene que devolverme 3 arrays
function validateToken(token){
    if (typeof token !== 'string') throw new TypeError('token is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')
}