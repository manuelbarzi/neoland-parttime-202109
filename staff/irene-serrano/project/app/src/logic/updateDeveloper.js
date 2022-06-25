import { validators, errors } from 'commons'



const { validateToken } = validators
const { AuthError, ClientError, ServerError } = errors

export default function (token, name, description, stack, location, link) {
    validateToken(token)

    return fetch(`http://localhost:8080/api/developer`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, description, stack, location, link })

    })
        .then(res => {
            const { status } = res

            if (status === 204)
                return

            else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload

                        if (status === 401)
                            throw new AuthError(message)
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