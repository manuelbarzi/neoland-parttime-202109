function modifyUser(token, data, callback) {
    validateToken(token)
    validateCallback(callback)
    validateData(data)

    const xhr = new XMLHttpRequest

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', () => {
        const {status} = xhr

        if (status === 400 || status === 401 || status === 409) {
            const {responseText: json} = xhr

            const payload = JSON.parse(json)

            const error = payload.error

            callback(new Error(error))
        } else if (status === 204) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    json = JSON.stringify(data)

    xhr.send(json)
}