
import {validators } from 'commons'
const {validateEmail, validateString, validatePassword} = validators

function registerDeveloepr(name, email, password, description, stack, location, link){

    validateEmail(email)
    validatePassword(password) 
    validateString(name, 'name')
    validateString(description, 'description')
    if(stack) validateString(stack, 'stack')
    if(location) validateString(location, 'location')
    if(link) validateString(link, 'link')
  

    return fetch('http://localhost:8080/api/developer', {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password, description, stack, location, link})
    })
        .then(res=> {
            const {status} = res

            if(status === 201){
                return
            } else if(status >= 400 && status < 500){
                throw new Error(res.statusText)
            } else if (status >= 500) throw new Error('server error')

        })
}
export default registerDeveloepr