const { retrieveUser } = require('logic')
const { extractUserIdFromAuthorization } = require('../helpers')

module.exports = (req, res) => {
    try {

        const id = extractUserIdFromAuthorization(req)
        // hacemos un split del Authorization: Bearer + id que se converte en un array con 2 posiciones y cogemos la segunda (el id)

        retrieveUser(id)
            .then(user => res.json(user))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}