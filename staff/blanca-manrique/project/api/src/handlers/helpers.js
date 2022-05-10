const { env: { JWT_SECRET }} = process //de las variables de entorno del proceso me traigo el secreto
const { verify } = require('jsonwebtoken') //para validar el token me traigo de la librería jsonwebtoken el método verify. Verify necesita el secreto para poder comprobar que el token es válido

const extractUserIdFromAuthorization = req => {
    const { headers: { authorization } } = req

    const [, token] = authorization.split(' ') //extraigo el token

    const { sub: userId } = verify(token, JWT_SECRET) //verifico el token: si verify va bien me devuelve el payload, es decir, el objeto payload que tiene la propiedad sub (payload.sub). Puedo destructurar y quedarme con sub. sub es el userId. De esta forma podré devolver el userId

    return userId
}

module.exports = {
    extractUserIdFromAuthorization
}