import {validators, errors } from 'commons'
const { validateSalary, validateString } = validators
const { ClientError, ServerError } = errors

function createOffer(token, title, description, stack, minSalary, maxSalary, location) {

    
    validateString(title, 'title')
    validateString(description, 'description')
    validateString(stack, 'stack')
    validateSalary(minSalary, 'minSalary')
    validateSalary(maxSalary, 'maxSalary')

    if(location) validateString(location, 'location')
  

    return fetch('http://localhost:8080/api/offer', {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ title, description, stack, minSalary, maxSalary, location})
    })
        .then(res=> {
            const {status} = res

            if(status === 201){
                return
            } else if(status >= 400 && status < 500){
                throw new ClientError(res.statusText)
            } else if (status >= 500) throw new ServerError('server error')

        })
}
export default createOffer