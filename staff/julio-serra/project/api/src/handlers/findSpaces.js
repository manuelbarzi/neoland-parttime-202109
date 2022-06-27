const { findSpaces } = require('logic')

module.exports = (req, res) => {

try {
    const { query: { q } } = req

    findSpaces(q)
        .then(spaces => res.status(200).send(spaces))
        .catch(error => res.status(400).json({ error: error.message }))
} catch (error) {
    res.status(400).json({ error: error.message })
}

// const { query: { q }} = req

// findSpaces(q)

}