import { validators, errors } from 'commons'

const {validateToken} = validators
const { ClientError, ServerError } = errors

function retrieveNutritionist( token ){
    validateToken(token)

    return fetch('http://localhost:8080/api/nutritionist', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            const { status } = res

            if(status === 200)
                return res.json()
                    .then(nutritionist => {
                        return nutritionist
                    })
                    else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload
                        throw new ClientError(message)
                    })
            else if (status >= 500)
                    return res.text()
                        .then(text =>{
                            throw new ServerError(text)
                        })
        
        })
}

export default retrieveNutritionist