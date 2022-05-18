const { errors: { ClientError } } = require('commons')
const { verify } = require('jsonwebtoken')
const { env: { JWT_SECRET } } = process

module.exports = req => {

    const { headers: { authorization } } = req

    const [, token] = authorization.split(' ')

    try {

        const {sub: userId} = verify(token, JWT_SECRET) //el verify, verifica y devuleve el token decodificado como se creo en el authenticate

        return userId
    } catch (error) {
        throw new ClientError(error.message)
    }

}
