const { authenticateUser } = require('logic')
const { env: { JWT_SECRET, JWT_EXP}} = process //de las enviroment variables traeme JWT
const  { sign } = require('jsonwebtoken') //me traigo metodo sign de la librería jsonwebtoken


module.exports = (req, res) => {
    try {
        
        const { body: { email, password }} = req

        authenticateUser(email, password)
            .then(userId => {
                const token = sign({ sub: userId}, JWT_SECRET, { expiresIn: JWT_EXP })
                res.status(200).json({ token })
            })
            .catch(error => res.status(400).json({ error: error.message}))
    } catch (error) {
        res.status(400).json({ error: error.message })
        
    }
}