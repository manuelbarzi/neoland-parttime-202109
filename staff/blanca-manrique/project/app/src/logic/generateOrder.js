import { validators, errors } from 'commons'

const { validateToken, validateId, validateString } = validators
const { AuthError, NotFoundError, FormatError, ClientError, ServerError } = errors

function generateOrder(token, orderId, status) {
    validateToken(token)
    validateId(orderId, 'order id')
    validateString(status, 'order status')


    return fetch(`http://localhost:8080/api/orders/${orderId}/generated`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
    })
        .then(res => {
            const { status } = res

            if (status === 204)
                return 
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

export default generateOrder