const { authenticateUser } = require('logic')
const { env: { JWT_SECRET, JWT_EXP } } = process //de las variables de entorno del proceso me traigo el secreto y el tiempo de expiración
const { sign } = require('jsonwebtoken') //para crear el token necesitamos de la librería jsonwebtoken el método sign: firma
const { errors: { AuthError, FormatError }} = require('commons')

module.exports = (req, res) => {
    try {
        const { body: { email, password } } = req

        authenticateUser(email, password)
            .then(userId => { //creamos el token con el método sign al que le pasamos un payload que tiene 3 partes: sub-->userId, secreto, expiresIn
                const token = sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_EXP })

                res.status(200).json({ token })
            })
            .catch(error => {
                let status = 500

                if (error instanceof AuthError)
                    status = 401

                res.status(status).json({ error: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError)
            status = 400

        res.status(status).json({ error: error.message })
    }
}