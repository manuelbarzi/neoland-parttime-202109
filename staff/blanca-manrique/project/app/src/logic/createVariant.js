import { validators, errors } from 'commons'

const { validateToken, validateId, validateString, validateNumber } = validators
const { ClientError, ServerError, DuplicityError } = errors

function createVariant(token, supplierId, productId, size, color, stockOnHand, criticalStock ) {
    validateToken(token)
    validateId(supplierId, 'supplier id')
    validateId(productId, 'product id')
    validateString(size, 'product size')
    validateString(color, 'product color')
    validateNumber(stockOnHand, 'variant stock on hand')
    validateNumber(criticalStock, 'variant critical stock')

    return fetch(`http://localhost:8080/api/suppliers/${supplierId}/products/${productId}/variants`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ size, color, stockOnHand, criticalStock })
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
export default createVariant