const { addMealToPlan } = require('logic')
const { extractUserIdFromAuthorization} = require('./helpers')

module.exports = (req, res) => {
    try {
        
        const nutritionistId = extractUserIdFromAuthorization(req)

       const { params: { patientId, mealId }, body: { day }} = req   
       
       

        addMealToPlan(nutritionistId, patientId, day, mealId)
            .then(mealplan => res.status(200).json(mealplan))
            
          // .then(() => res.status(200).send())
           .catch(error => res.status(400).json({ error: error.message}))
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}