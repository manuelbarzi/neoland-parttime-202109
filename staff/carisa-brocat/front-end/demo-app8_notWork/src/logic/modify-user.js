import {validateToken, validateData} from './helpers/validators'

function modifyUser(token, data) {
    validateToken(token)
    validateData(data)


    new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest

        xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    
        xhr.addEventListener('load', () => {
            const {status} = xhr
    
            if (status === 400 || status === 401 || status === 409) {
                const {responseText: json} = xhr
    
                const payload = JSON.parse(json)
    
                const error = payload.error
    
                reject(new Error(error))
            } else if (status === 204) {
                resolve(null)
            }
        })
    
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-type', 'application/json')
    
        json = JSON.stringify(data)
    
        xhr.send(json)
    })}

export default modifyUser