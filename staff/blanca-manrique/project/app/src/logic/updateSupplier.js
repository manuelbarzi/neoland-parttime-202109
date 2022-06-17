import { validators, errors } from 'commons'

const { validateToken, validateId, validateEmail, validateString, validateBoolean } = validators
const { AuthError, NotFoundError, FormatError, ClientError, ServerError, DuplicityError } = errors

function updateSupplier(token, supplierId, name, email, web, phone, adress, contactPerson, tradeAssurance) {
    validateToken(token)
    validateId(supplierId, 'supplier id')
    validateString(name, 'supplier name')
    validateEmail(email)
    validateString(web, 'supplier web')
    validateString(phone, 'supplier phone')
    validateString(adress, 'supplier adress')
    validateString(contactPerson, 'supplier contact person')
    validateBoolean(tradeAssurance, 'trade assurance')

    return fetch(`http://localhost:8080/api/suppliers/${supplierId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, web, phone, adress, contactPerson, tradeAssurance })
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

export default updateSupplier