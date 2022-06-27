import { validators, errors } from 'commons'

const { validateToken, validateId, validateString, validateNumber } = validators
const { ClientError, ServerError, DuplicityError } = errors

function createProduct(token, supplierId, supplierProductId, supplierProductUrl, name, category, brand, model, material, price, salePrice) {
    validateToken(token)
    validateId(supplierId, 'supplier id')
    validateString(supplierProductId, 'product id from supplier')
    validateString(supplierProductUrl, 'supplier product URL')
    validateString(name, 'product name')
    validateString(category, 'product categorý')
    validateString(brand, 'product brand')
    validateString(model, 'product model')
    validateString(material, 'product material')
    validateNumber(price, 'purchase price')
    validateNumber(salePrice, 'sale price')

    return fetch(`http://localhost:8080/api/suppliers/${supplierId}/products`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ supplierProductId, supplierProductUrl, name, category, brand, model, material, price, salePrice })
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
export default createProduct