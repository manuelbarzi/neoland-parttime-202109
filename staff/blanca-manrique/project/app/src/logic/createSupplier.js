import { validators, errors } from 'commons'

const { validateToken, validateString, validateEmail, validateBoolean } = validators
const { ClientError, ServerError, DuplicityError } = errors

function createSupplier(token, name, email, web, phone, adress, contactPerson, tradeAssurance) {
    validateToken(token)
    validateString(name, 'supplier name')
    validateEmail(email)
    validateString(web, 'supplier web')
    validateString(phone, 'supplier phone')
    validateString(adress, 'supplier adress')
    validateString(contactPerson, 'supplier contact person')
    validateBoolean(tradeAssurance, 'trade assurance')

    return fetch('http://localhost:8080/api/suppliers', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, web, phone, adress, contactPerson, tradeAssurance })
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
export default createSupplier