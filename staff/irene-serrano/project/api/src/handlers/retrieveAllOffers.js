const { retrieveAllOffers } = require('logic')

module.exports = (req, res) => {
  
    const filter = req.body 

    try {
       
        retrieveAllOffers( filter)
            .then(offers => res.json(offers))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
