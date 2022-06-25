import { validators, errors } from 'commons'

const { validateToken, validateId } = validators
const { ClientError, ServerError } = errors

export default function (token, offerId) {
    validateToken(token)
    validateId(offerId, 'offer id')

    return fetch(`http://localhost:8080/api/offer/${offerId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
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