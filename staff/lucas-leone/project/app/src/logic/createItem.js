import { validators, errors } from 'commons'

const { validateToken, validateString } = validators
const { ClientError, ServerError } = errors

export default function (token, listId, sectionId, name, categories, ingredients, allergens, price, image) {
    validateToken(token)
    validateString(name, 'name')

    return fetch(`http://localhost:8080/api/list/${listId}/section/${sectionId}/item`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, categories, ingredients, allergens, price, image })
    })
        .then(res => {
            const { status } = res


            if (status === 201)
                return
            else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload

                        throw new ClientError(message)
                    })
            else if (status >= 500)
                return res.text()
                    .then(text => {
                        throw new ServerError(text)
                    })
        })
}