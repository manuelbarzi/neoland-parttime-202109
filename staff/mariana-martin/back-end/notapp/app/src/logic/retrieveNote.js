import { validators, errors } from 'commons'

const { validateToken, validateId } = validators
const { AuthError, NotFoundError, FormatError, ClientError, ServerError } = errors

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
                        note.date = new Date(note.date)  //convierto de string a tipo fecha para aplicar el método de fecha
                        return note
                    })
            else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload

                        if (status === 400)
                            throw new FormatError(message)
                        if (status === 401)
                            throw new AuthError(message)
                        else if (status === 404)
                            throw new NotFoundError(message)
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