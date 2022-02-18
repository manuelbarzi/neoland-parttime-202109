import { ValidateToken, ValidateId } from "./helpers/validators"


function addVehicleToCart(token, id) {
    ValidateToken(token)
    ValidateId(id)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

        .then(res => {
            const { status } = res

            if (status >= 400 && status < 500) {
                return res.json()
                    .then(payload => { throw new Error(payload.error) })
            } else if (status >= 500) {
                throw new Error('server error')
            } else if (status === 200) {
                return res.json()
            }

        })

        .then(user => {

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

   
export default addVehicleToCart