import { validators, errors } from 'commons'

const { validateId } = validators
const { AuthError, NotFoundError, FormatError, ClientError, ServerError } = errors

export default function (offerId, requestId) {
    validateId(offerId, 'offer id')
    validateId(requestId, 'request id')

    return fetch(`http://localhost:8080/api/offer/${offerId}/request/${requestId}`, {
        method: 'GET',
        headers: {
            
        }
    })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .then(candidate => {
                        return candidate
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