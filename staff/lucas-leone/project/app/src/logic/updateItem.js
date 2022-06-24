import { errors } from 'commons'

const { ClientError, ServerError } = errors

export default function (token, listId, sectionId, itemId, name, categories, ingredients, allergens, price, image) {


    return fetch(`http://localhost:8080/api/list/${listId}/section/${sectionId}/item/${itemId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, categories, ingredients, allergens, price, image })
    })
        .then(res => {
            const { status } = res

            if (status === 204)
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