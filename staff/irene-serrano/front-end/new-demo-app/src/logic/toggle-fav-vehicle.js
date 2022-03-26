import { validateToken, validateId} from './helpers/validators'

function toggleFavVehicle(token, id) {
    validateToken(token)
    validateId(id)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        const {status} = response

        if (status >= 400 && status < 500)
            return response.json().then(payload => {throw new Error(payload.error) })
        else if (status>= 500)
            throw new Error('server error')
        else  if (status === 200){
            const user = response.json()
            const favs = user.favs || []

            const index = favs.indexOf(id)

            if (index < 0)
                favs.push(id)
            else
                favs.splice(index, 1)
            
            return fetch('https://b00tc4mp.herokuapp.com/api/v2/users',{
                method: 'PATCH',
                headers:{
                    Authorizarion: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body:favs.JSON.stringify()

            }).then(response =>{
                const {status} = response

                if (status >= 400 && status < 500)
                    return response.json().then(payload => {throw new Error(payload.error) })
                else if (status>= 500)
                    throw new Error('server error')
                else if (status === 200)
                return response.json()
            })
        }
   
    })

    /* 


            xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr.addEventListener('load', function () {
                if (this.status === 400 || this.status === 401 || this.status === 409) {
                    const res = JSON.parse(this.responseText)

                    const error = res.error

                    callback(new Error(error))
                } else if (this.status === 204) {
                    callback(null)
                }
            })

            xhr.setRequestHeader('Authorization', 'Bearer ' + token)
            xhr.setRequestHeader('Content-type', 'application/json')

            const data = { favs: favs }

            const json = JSON.stringify(data)

            xhr.send(json)
        }
    })

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send() */
}
export default toggleFavVehicle