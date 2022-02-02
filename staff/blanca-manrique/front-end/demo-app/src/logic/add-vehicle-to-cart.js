import {validateToken} from './helpers/validators'

function addToCart(id, token) {

    if (typeof id !== 'string') throw new TypeError('id is not string')
    if (!id.trim()) throw new Error('id is empty or blank')

    validateToken(token)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
        .then(response =>{
            const {status} = response

            if(status === 200)
                return response.json()
            else if( status === 401)
                return response.json().then(payload => {throw new Error(payload.error)})
        })
        .then(user =>{
            const { cart = [] } = user 

            let item = cart.find(item => item.id === id)

            if (item)
                item.qty++;
            else {
                item = { id, qty: 1 }

                cart.push(item)
            }
            
            return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
                method:'PATCH',
                headers:{
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({cart})
            })
                .then(response =>{
                    const {status} = response

                    if(status === 204)
                        return
                    else if( status === 400 || status === 401 || status === 409)
                        return response.json().then(payload => {throw new Error (payload.error)})
                })
        })
}
export default addToCart