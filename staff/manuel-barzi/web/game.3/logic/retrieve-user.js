function retrieveUser(token, callback) {
    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.onload = function () {
        if (this.status === 401) {
            var res = JSON.parse(this.responseText)

            var error = res.error

            callback(new Error(error))
        } else if (this.status === 200) {
            var user = JSON.parse(this.responseText)

            callback(null, user)
        }
    }

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}