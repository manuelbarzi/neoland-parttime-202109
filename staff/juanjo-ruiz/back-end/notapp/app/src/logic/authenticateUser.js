import { validators } from 'commons'

const { validateEmail, validatePassword } = validators

export default function (email, password) {
    validateEmail(email)
    validatePassword(password)

    return fetch('http://localhost:8080/api/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .then(payload => {
                        const { token } = payload

                        return token
                    })
            else if (status === 400 && status < 500)
                throw new Error('client error')
            else if (status >= 500)
                throw new Error('server error')
        })
}