import { validators, errors } from 'commons'

const { ServerError, ClientError, NotFoundError, AuthError } = errors
const { validateToken } = validators

function createPost(token, title, description, category, subject, image, adress) {
    validateToken(token)

    return fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, category, subject, image, adress })
    })
        .then(res => {
            const { status } = res

            if (status === 201)
                return
            else if (status >= 400 && status < 500)
                return res.json()
                    .then(data => {
                        const { error: message } = data

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

export default createPost
