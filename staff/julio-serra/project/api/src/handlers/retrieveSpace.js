const { retrieveSpace } = require('logic')

module.exports = (req, res) => {
    try {
        const { params: { spaceId } } = req

        retrieveSpace(spaceId)
            .then(space => res.status(200).json(space))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {

        res.status(400).json({ error: error.message })
    }
}