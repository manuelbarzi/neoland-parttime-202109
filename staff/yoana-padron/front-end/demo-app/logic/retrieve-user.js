function retrieveUser(token, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.onload = function () {
        if (this.status === 401) {
            const res = JSON.parse(this.responseText)

            const error = res.error

            callback(new Error(error))
        } else if (this.status === 200) {
            const user = JSON.parse(this.responseText)

            callback(null, user)
        }
    }

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}