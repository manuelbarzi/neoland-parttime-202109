import { validators, errors } from 'commons'
import { validateId } from 'commons/src/validators'
const { validateToken, validateName,validateEmail, validatePassword, validateNumber, validateString } = validators
const { AuthError, ClientError, ServerError } = errors


function updatePatient( token, patientId, name, email, password, age, weight, height, measures, goal ){
    validateToken(token)
    validateId(patientId)
    validateName(name)
    validateEmail(email)
    validatePassword(password)
    validateNumber(age, 'age')
    validateNumber(weight, 'weight')
    validateNumber(height, 'height')
    // validateArray(measures, 'measures')
    validateString(goal, 'goal')

    return fetch(`http://localhost:8080/api/patient/${patientId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, email, password, age, weight, height, measures, goal})
    })

        .then(res => {
            const { status } = res

            if (status === 204)
            return

        else if (status >= 400 && status < 500)
            return res.json()
                .then(payload => {
                    const { error: message } = payload

                    if (status === 401)
                        throw new AuthError(message)
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

export default updatePatient