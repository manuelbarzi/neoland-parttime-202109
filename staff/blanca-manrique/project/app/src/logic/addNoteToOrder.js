import { validators, errors } from 'commons'

const { validateToken, validateId, validateString, validateNumber } = validators
const { ClientError, ServerError, DuplicityError } = errors

function addNoteToOrder(token, orderId, text) {
    validateToken(token)
    validateId(orderId, 'order id')
    validateString(text, 'text')

    return fetch(`http://localhost:8080/api/orders/${orderId}/add/notes`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    })
        .then(res => {
            const { status } = res

            if (status === 201)
                return
            else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload

                        if (status === 409)
                            throw new DuplicityError(message)
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
export default addNoteToOrder