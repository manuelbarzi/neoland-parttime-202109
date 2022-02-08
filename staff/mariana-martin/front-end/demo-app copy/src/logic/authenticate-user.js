//Versión FETCH y PROMISES

import { validateUsername, validatePassword } from './helpers/validators'

function authenticateUser(username, password ) {
   validateUsername(username)
   validatePassword(password)

   //2 cadenas de promesas concatenadas al return fetch y then:
   
    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users/auth', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => {
            const { status } = response

            if(status === 200)
            return response.json().then(payload => payload.token)
            else if (status >= 400 && status < 500)
            return response.json().then(payload => { throw new Error(payload.error)})
        })

}

export default authenticateUser