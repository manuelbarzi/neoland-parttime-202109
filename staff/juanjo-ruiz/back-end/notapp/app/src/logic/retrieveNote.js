import { validators } from 'commons'

const { validateToken, validateId } = validators

export default function (token, noteId) {
    validateToken(token)
    validateId(noteId, 'note id')

    return fetch(`http://localhost:8080/api/notes/${noteId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .then(note => {
                        note.date = new Date(note.date)

                        return note
                    })
            else if (status === 400 && status < 500)
                throw new Error('client error')
            else if (status >= 500)
                throw new Error('server error')
        })
}