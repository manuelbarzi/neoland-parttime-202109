function registerUser(name, username, city, country, password, callback) {
    validateName(name)
    validateUsername(username)
    validateCity(city)
    validateCountry(country)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', () =>{
        const {status} = xhr

        if (status === 400 || status === 409) {
            const {responseText : json} = xhr
            const payload = JSON.parse(json)

            const error = payload.error

            callback(new Error(error))
        } else if (status === 201) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json')

    payload = { name, username, city, country, password }

    json = JSON.stringify(payload)

    xhr.send(json)
}