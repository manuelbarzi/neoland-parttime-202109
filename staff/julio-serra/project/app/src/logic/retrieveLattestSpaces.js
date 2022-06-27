import { errors } from 'commons'

const { ClientError, ServerError } = errors

export default function retrieveLattestSpaces() {

    return fetch('http://localhost:8080/api/spaces/lattest', {
        method: 'GET',
    })

        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .then(spaces => {
                        return spaces
                    })
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