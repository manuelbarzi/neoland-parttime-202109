import {validateToken} from './helpers/validators'

function retrieveVehicle(id, token) {

    if (typeof id !== 'string') throw new TypeError('id is not string')
    if (!id.trim()) throw new Error('id is empty or blank')

    validateToken(token)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
        .then(response =>{
            const {status} = response

            if(status === 200)
                return response.json()
            else if(status >=400 && status < 500)
                return response.json().then(payload => {throw new Error(payload.error)})
            else if(status >= 500)
                throw new Error ('server error')
        })
        .then(user =>{
            const {favs} = user

            return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)
            .then(response =>{
                const {status} = response

                if(status === 200)
                    return response.json()
                else if(status >=400 && status < 500)
                    return response.json().then(payload => {throw new Error(payload.error)})
                else if (status >=500)
                    throw new Error ('server error')
            })    
            .then(vehicle => {
                    vehicle.isFav = favs.includes(vehicle.id)

                    return vehicle
                })
        })
}
export default retrieveVehicle