import {validateToken} from './helpers/validators'

function toggleFavVehicle(id, token) {
    
    if (typeof id !== 'string') throw new TypeError('id is not string')
    if (!id.trim()) throw new Error('id is empty or blank')

    validateToken(token)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response =>{
            const {status} = response

            if(status === 200)
                return response.json()
            else if( status >= 400 && status < 500)
                return response.json().then(payload => {throw new Error(payload.error)})
            else if(status >= 500)
                throw new Error('server error')
        })
        .then(user =>{
            const {favs = []} = user
            const index = favs.indexOf(id) 
            if (index < 0) 
                favs.push(id) 
            else 
                favs.splice(index, 1) 
            
            return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
                method: 'PATCH',
                headers:{
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({favs})
            })
                .then(response =>{
                    const {status} = response

                    if(status === 204)
                        return
                    else if( status === 400 || status === 401 || status === 409 )
                        return response.json().then(payload => {throw new Error(payload.error)})
                })
        })

}
export default toggleFavVehicle