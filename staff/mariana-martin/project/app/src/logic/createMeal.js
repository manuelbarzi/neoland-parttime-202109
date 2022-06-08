import { validators, errors } from 'commons'
const { validateToken, validateString } = validators
const { ClientError, ServerError } = errors


function createMeal( token, title, description) {
    validateToken(token)
    validateString(title, 'title')
    validateString(description, 'description')

    

    return fetch('http://localhost:8080/api/meal', {
        method: 'POST',
        headers:{
        
            Authorization: `Bearer ${token}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ title, description })
        
    })
        .then(res => {
            const { status } = res

            if(status === 201)
                return
            else if ( status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload

                        throw new ClientError(message)
                    })
                else if ( status >= 500)
                    return res.text()
                        .then(text => {
                            throw new ServerError(text)
                        })
        })

}

export default createMeal