import {validators, errors } from 'commons'
const { validateId, validateToken } = validators;
const { ClientError, ServerError } = errors

function addOfferRequest(offerId, token) {
    validateId(offerId)
    validateToken(token)

  

    return fetch(`http://localhost:8080/api//offer/${offerId}`, {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
    },
   
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
export default addOfferRequest