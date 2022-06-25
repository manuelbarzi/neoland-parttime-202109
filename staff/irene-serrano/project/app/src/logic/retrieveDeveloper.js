import { validators, errors } from 'commons'

const { validateToken, validateId } = validators
const { AuthError, NotFoundError, FormatError, ClientError, ServerError } = errors

export default function (developerId) {
    
    validateId(developerId, 'developer id')

    return fetch(`http://localhost:8080/api/developer/${developerId}`, {
        method: 'GET',
    })
        .then(res => {
            const { status } = res
            if (status === 200)
                return res.json()
                    .then(developer => {
                        return developer
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