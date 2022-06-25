import { errors } from 'commons'
const { AuthError, ClientError, ServerError } = errors
export default function ({name, email, message}) {

    return fetch(`http://localhost:8080/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })

    })
        .then(res => {
            const { status } = res

            if (status === 200)
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
