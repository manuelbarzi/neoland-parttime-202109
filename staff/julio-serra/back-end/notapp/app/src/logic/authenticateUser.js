import { validators } from 'commons'
const { validateEmail, validatePassword } = validators

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return fetch('http://localhost:8080/api/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) //el objeto lo convertimos a JSON
    })
        .then(res => { // analizar la respuesta, mirar el status de la respuesta
            const { status } = res
            if (status === 200) {
                return // no esperamos respuesta alguna
            } else if (status >= 400 && status < 500)
                throw new Error('Client Error')
            else if (status >= 500)
                throw new Error('Server Error')
        })
}

export default authenticateUser 