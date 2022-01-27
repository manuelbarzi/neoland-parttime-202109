import { validateUsername, validatePassword } from './helpers/validators'

function authenticateUser(username, password) {
    validateUsername(username)
    validatePassword(password)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users/auth', { 
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => {
            const { ok, status } = response

            //if (ok) 
            if (status === 200)
                return response.json().then(payload => payload.token)
            else if (status >= 400 && status < 500)
                return response.json().then(payload => { throw new Error(payload.error) })
            else if (status >= 500)
                throw new Error('server error')
            else
                throw new Error('unknown error')

        })
}

export default authenticateUser