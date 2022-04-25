import {validateToken} from './helpers/validators'

function retrieveUser(token) {
    validateToken(token)
    return fetch('http://localhost:8080/api/users',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            const {status} = response

            if(status === 200)
                return response.json()
            else if(status >= 400 && status < 500)
                return response.json().then(payload => {throw new Error(payload.error)})
            else if(status >=500)
                throw new Error('server error')
        })
}
export default retrieveUser