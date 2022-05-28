import { validators, errors } from 'commons'

const { DuplicityError, ServerError, ClientError } = errors
const { validateString, validatePassword, validateEmail } = validators

function updateUser(userId, nickname, image, hairTexture, interests, favoritePosts) {
    validateString(nickname, 'nickname')
    validateEmail(email)
    validatePassword(password)

    return fetch('http://localhost:8080/api/users', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`

        },
        body: JSON.stringify({ userId, nickname, image, hairTexture, interests, favoritePosts }) //el metodo JSON.stringify convierte valores javascript a JSON
    })
        .then(res => {
            const { status } = res

            if (status === 201)
                return
            else if (status >= 400 && status < 500)
                return res.json()
                    .then(data => {
                        const { error: message } = data

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

export default updateUser
