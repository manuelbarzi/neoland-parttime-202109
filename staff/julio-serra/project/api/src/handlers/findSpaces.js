const { findSpaces } = require('logic')

module.exports = (req, res) => {

try {
    const { query: { q } } = req

    findSpaces(q)
        .then(() => res.status(200).send(q))
        .catch(error => res.status(400).json({ error: error.message }))
} catch (error) {
    res.status(400).json({ error: error.message })
}

// const { query: { q }} = req

// findSpaces(q)

}