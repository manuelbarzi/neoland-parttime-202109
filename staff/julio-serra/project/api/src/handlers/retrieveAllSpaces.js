const { retrieveAllSpaces } = require('logic')

module.exports = (req, res) => {
    try {
        retrieveAllSpaces()
            .then(spaces => res.status(200).json(spaces))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {

        res.status(400).json({ error: error.message })
    }
}