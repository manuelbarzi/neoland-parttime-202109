import { validators, errors } from 'commons'
const { validateId, validateDay } = validators
const {  ClientError, ServerError } = errors


function addMealToPlan(token, patientId, day, mealId ){
    validateId(token)
    validateId(patientId, 'patient id')
    validateDay(day, 'day') 
    validateId(mealId, 'meal id')

    return fetch(`http://localhost:8080/api/patient/${patientId}/mealPlan/meal/${mealId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ day })
    })
    .then(res => {
        const { status } = res

        if(status === 200)
            return
        else if ( status >= 400 && status < 500)
            return res.json()
                .then(payload => {
                    const { error: message } = payload

                    throw new ClientError(message)
                })
            else if ( status >= 500)
                return res.text()
                    .then(text => {
                        throw new ServerError(text)
                    })
    })
}
export default addMealToPlan