function registerUser(name, city, country, username, password, callback) {
    ValidateName(name)

    if (typeof city !== 'string') throw new TypeError(city + ' is not string')
    if (!city.trim()) throw new Error('city is empty or blank')

    if (typeof country !== 'string') throw new TypeError(country + ' is not string')
    if (!country.trim()) throw new Error('country is empty or blank')

    ValidateName(username)

    ValidatePassword(password)

    ValidateCallback(callback)

    var xhr = new XMLHttpRequest

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function () {
        if (this.status === 400 || this.status === 409) {
            var res = JSON.parse(this.responseText)

            var error = res.error

            callback(new Error(error))
        } else if (this.status === 201) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json')

    var data = { name: name, city: city, country: country, username: username, password: password }

    var json = JSON.stringify(data)

    xhr.send(json)
}