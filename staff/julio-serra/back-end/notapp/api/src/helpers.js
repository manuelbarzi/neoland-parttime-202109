const { verify } = require('jsonwebtoken')
const { env: { JWT_SECRET } } = process

const extractUserIdFromAuthorization = req => {
    const { headers: { authorization } } = req // la cabecera de respuesta es > Authorization: Bearer + id
    const [, token] = authorization.split(' ')

    const { sub: id} = verify(token, JWT_SECRET)

    return id
}

module.exports = {
    extractUserIdFromAuthorization
}