const { verify } = require('jsonwebtoken')
const { env: { JWT_SECRET }} = process

//el sub: contendrá el id del user(es la propiedas de la 2 parte del token, cuando se decodifica con atob)

const extractUserIdFromAuthorization = req => {
    
    const { headers: { authorization }} = req

    const [, token ] = authorization.split(' ')

    const { sub: userId } = verify(token, JWT_SECRET) //verifico token y secreto, destrucutro la parte sub y la retorno cono el id

 
    return userId
}
module.exports = {
    extractUserIdFromAuthorization
}