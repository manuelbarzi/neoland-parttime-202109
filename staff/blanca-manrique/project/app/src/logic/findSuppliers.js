import { validators, errors } from 'commons'

const { validateToken, validateString } = validators
const { AuthError, NotFoundError, FormatError, ClientError, ServerError } = errors

export default function findSpaces(token, query) {
    validateToken(token)
    validateString(query, 'query')

    return fetch(`http://localhost:8080/api/suppliers/find?q=${query}`), {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
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