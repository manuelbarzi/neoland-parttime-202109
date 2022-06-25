const { retrieveAllDevelopers } = require('logic')

module.exports = (req, res) => {
    try {
       
        retrieveAllDevelopers(role = 1)
            .then(users => res.json(users))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}