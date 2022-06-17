import { validators, errors } from 'commons'

const { validateToken, validateId, validateString, validateNumber } = validators
const { AuthError, NotFoundError, FormatError, ClientError, ServerError, DuplicityError } = errors

function updateProduct(token, supplierId, productId, supplierProductId, supplierProductUrl, name, category, brand, model, material, price, salePrice) {
    validateToken(token)
    validateId(supplierId, 'supplier id')
    validateId(productId, 'product id')
    validateString(supplierProductId, 'supplier product id') 
    validateString(supplierProductUrl, 'supplier productId URL')
    validateString(name, 'product name')
    validateString(category, 'product category')
    validateString(brand, 'product brand')
    validateString(model, 'product model')
    validateString(material, 'product material')
    validateNumber(price, 'purchase price')
    validateNumber(salePrice, 'sale price')

    return fetch(`http://localhost:8080/api/suppliers/${supplierId}/products/${productId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ supplierProductId, supplierProductUrl, name, category, brand, model, material, price, salePrice })
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

export default updateProduct