import {ValidateName, ValidatePassword, ValidateCallback} from "./helpers/validators"

function registerUser(name, city, country, username, password) {
    ValidateName(name)
    ValidateName(username)
    ValidatePassword(password)

return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
    method: 'POST',
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify({name, city,country,username,password})
})
    .then (response => {
        const { status } = response

        if (status === 201)
            return
        else if (status>= 400 && status < 500)
            return response.json().then(payload => {throw new Error(payload.error)})
        else if (status >= 500)
            throw new Error ('server error')
    })

}

export default registerUser