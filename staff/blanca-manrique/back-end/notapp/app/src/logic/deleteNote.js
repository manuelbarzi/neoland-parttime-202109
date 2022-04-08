import { validators, errors } from 'commons'

const { validateToken, validateId } = validators
const { ClientError, ServerError } = errors

function deleteNote(token, noteId) {
    validateToken(token)
    validateId(noteId, 'note id')


    return fetch(`http://localhost:8080/api/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
        // body: JSON.stringify({ user: token, note: _id })
        //no hace falta: mandamos el token por la authorization, y el id de la nota por la URL, por lo tanto este paso es redundante y no haría falta
    })
        .then(res => {
            const { status } = res

            if (status === 204)
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
export default deleteNote