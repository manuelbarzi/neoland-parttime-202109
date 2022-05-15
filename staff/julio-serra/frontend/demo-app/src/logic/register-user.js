import { validateName, validateUsername, validatePassword, validateCallback} from './helpers/validators'

function registerUser(name, username, password, callback) {

        validateName(name)
        validateUsername(username)
        validatePassword(password)
        validateCallback(callback)

    // registerUser('Julio', 'julio', '123', console.log)
    const xhr = new XMLHttpRequest

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function() {
        if (this.status === 409) {
            const res = JSON.parse(this.responseText)

            const error = res.error

            callback(new Error(error))
        } else if (this.status === 201) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json')

    // const json = '{"name": "' + name + '", "username": "' + username + '", "password": "' + password + '" }'

    const data = {}

    data.name = name
    data.username = username
    data.password = password

    const json = JSON.stringify(data)

    xhr.send(json)

}

export default registerUser