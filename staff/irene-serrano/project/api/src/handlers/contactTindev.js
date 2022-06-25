const { contactTindev } = require('logic') 

module.exports = (req, res) => {
    try {
        const { body: { name, email, message} } = req


            contactTindev(name, email, message )
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}