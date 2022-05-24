const {authenticateUser} = require('logic')
const { env: { JWT_SECRET, JWT_EXP } } = process
const { sign } = require('jsonwebtoken')


module.exports = (req, res) => {
    try {
        const{ body: { username, password } } = req

        authenticateUser(username,password)
        .then(restaurantId => {
            const token = sign({ sub: restaurantId }, JWT_SECRET, { expiresIn: JWT_EXP })

        res.status(200).json({ token })
    })

        .catch(error => res.status(400).json({ error: error.message}))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }


}
