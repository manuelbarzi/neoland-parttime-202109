import { validators } from 'commons'

const { validateName, validateEmail, validatePassword} = validators

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)
    
    return fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password }) //el objeto lo convertimos a JSON
    })
        .then(res => { // analizar la respuesta, mirar el status de la respuesta
            const { status } = res
            if (status === 201) {
                return // no esperamos respuesta alguna
            } else if (status >= 400 && status < 500)
                throw new Error('Client Error')
            else if (status >= 500)
                throw new Error('Server Error')
        })
}

export default registerUser