import { validators, errors } from 'commons'

const {validateToken, validateId } = validators
const { ClientError, ServerError, AuthError, FormatError, NotFoundError } = errors

function retrieveMealPlan(token, patientId) {
    validateToken(token)
    validateId(patientId, 'patient id')
    

    return fetch(`http://localhost:8080/api/patient/${patientId}/mealPlan`, {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        const { status } = res

        if (status === 200)
            return res.json()
                .then( plan => {
                    return plan
                })
                else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload

                        if (status === 400)
                            throw new FormatError(message)
                        if (status === 401)
                            throw new AuthError(message)
                        else if (status === 404)
                            throw new NotFoundError(message)
                        else
                            throw new ClientError(message)
                    })
            else if (status >= 500)
                return res.text()
                    .then(text => {
                        throw new ServerError(text)
                    })
        })
}

export default retrieveMealPlan