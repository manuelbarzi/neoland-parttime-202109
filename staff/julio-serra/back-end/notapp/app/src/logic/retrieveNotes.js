import { validators, errors } from 'commons'

const { validateToken } = validators
const { ClientError, ServerError } = errors

export default function retrieveNotes(token) {
    validateToken(token)

    return fetch('http://localhost:8080/api/notes', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                .then(notes => {
                    notes.forEach(note => note.date = new Date(note.date))
                    
                    return notes
                })
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