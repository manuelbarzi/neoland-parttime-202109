import { errors, validators } from 'commons'

const { validateId } = validators
const { ClientError, ServerError, FormatError, NotFoundError } = errors

export default function retrieveSpace(spaceId) {
    validateId(spaceId, 'space Id')

    return fetch(`http://localhost:8080/api/spaces/${spaceId}`, {
        method: 'GET',
    })

        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .then(space => {
                        return space
                    })
            else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload
                        if (status === 400)
                            throw new FormatError(message)
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