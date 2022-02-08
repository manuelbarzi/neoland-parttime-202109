function retrieveUser(token, callback) {
    validateToken(token)

    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', () => {
        const { status } = xhr

        if (status === 401) {
            const { responseText: json } = xhr
            const payload = JSON.parse(json)

            const error = payload.error

            callback(new Error(error))
        } else if (status === 200) {
            let { responseText: json } = xhr
            let payload = JSON.parse(json)

            callback(null, payload)
        }
    })

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}