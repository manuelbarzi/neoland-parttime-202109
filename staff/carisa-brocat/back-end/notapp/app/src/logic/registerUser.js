import { validators } from 'commons'

const { validateName, validateEmail, validatePassword } = validators

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(res => {
            const { status } = res

            if (status === 201)
                return
            else if (status >= 400 && status < 500)
                throw new Error('client error')
            else if (status >= 500)
                throw new Error('server error')
        })
}

export default registerUser