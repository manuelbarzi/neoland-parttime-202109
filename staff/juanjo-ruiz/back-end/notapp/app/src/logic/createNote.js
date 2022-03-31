import { validators } from 'commons'

const { validateToken, validateString, validateBoolean } = validators

export default function (token, text, color, _public) {
    validateToken(token)
    validateString(text, 'text')
    validateString(color, 'color')
    validateBoolean(_public, 'public')

    return fetch('http://localhost:8080/api/notes', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, color, public: _public })
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