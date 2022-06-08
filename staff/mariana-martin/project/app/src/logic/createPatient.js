import { validators, errors } from 'commons'
const { validateToken, validateString, validateName, validatePassword, validateNumber, validateEmail } = validators
const { ClientError, ServerError } = errors


function createPatient( token, name, email, password, age, weight, height, measures, goal ){
    validateToken(token)
    validateName(name)
    validateEmail(email)
    validatePassword(password)
    validateNumber(age, 'age')
    validateNumber(weight, 'weight')
    validateNumber(height, 'height')
    validateString(goal, 'goal')

    return fetch('http://localhost:8080/api/patient', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  name, email, password, age, weight, height, measures, goal })
    })
        .then(res => {
            const { status } = res

            if (status === 201)
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

export default createPatient