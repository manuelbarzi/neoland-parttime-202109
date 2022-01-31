function authenticateUser(username, password, callback) {
    validateUsername(username)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.addEventListener('load', () => {
        const {status} = xhr
        if (status === 400 || status === 401) {
            const {responseText: json} = xhr
            
            const payload = JSON.parse(json)
            
            const error = payload.error

            callback(new Error(error))
        } else if (status === 200) {
            let {responseText: json} = xhr
            
            let payload = JSON.parse(json)

            let token = payload.token

            callback(null, token)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json')

    payload = {username, password}

    json = JSON.stringify(payload)

    xhr.send(json)
}