import { validators, errors } from 'commons'

const { validateToken, validateString, validateBoolean } = validators
const { ClientError, ServerError } = errors

export default function createNote(token, text, color, _public) { // lo nombramos _public porque public ya es una parte de React
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

            if (status === 201)
                return
            else if (status >= 400 && status < 500)
                return res.json()

                    .then(payload => {
                        const { error: message } = payload
                        throw new ClientError(message)
                    })
                    
            else if (status >= 500)
                return res.text()
                    .then(text => {
                        throw new ServerError(text)
                    })
        })



}