import { validateUsername, validatePassword } from './helpers/validators'

function authenticateUser(username, password) {
    validateUsername(username)
    validatePassword(password)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users/auth', {
        method: 'POST',
        headers: {
            'Content-type': 'appiclation/json'
        },
        body: JSON.stringify({ username, password })
    })

        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json().then(payload => payload.token)
            else if (status >= 400 && status < 500)
                return response.json().then(payload => { throw new Error(payload.error) })
            else if (status >= 500)
                throw new Error('server error')
        })
    }

    export default authenticateUser

    // var xhr = new XMLHttpRequest

    // xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    // xhr.onload = function () {
    //     if (this.status === 400 || this.status === 401) {
    //         var res = JSON.parse(this.responseText)

    //         var error = res.error

    //         callback(new Error(error))
    //     } else if (this.status === 200) {
    //         var res = JSON.parse(this.responseText)

    //         var token = res.token

    //         callback(null, token)
    //     }
    // }

    // xhr.setRequestHeader('Content-type', 'application/json')

    // var data = {
    //     username: username,
    //     password: password
    // }

    // var json = JSON.stringify(data)

    // xhr.send(json)}

