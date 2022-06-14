import { validators, errors } from 'commons'

const { validateToken, validateString, validatePassword } = validators
const { DuplicityError, ClientError, ServerError } = errors

export default function (token, lisense, brand, model, frame) {
    validateToken(token)
    validateString(lisense, 'lisense')
    validateString(brand, 'brand')
    validateString(model, 'model')
    validateString(frame, 'frame')

    return fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ lisense, brand, model, frame })
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