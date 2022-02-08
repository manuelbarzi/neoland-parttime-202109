import { validateToken} from './helpers/validators'

function retrieveUser(token) {
    validateToken(token)
  
//FETCH:
    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        // method: 'GET',  //ya por defecto , podemos omitirlo
        headers: {
            Authorization: `Bearer ${token}`  //mandar authorizarion para recuperar usuario, y se manda el token
        }
    })
        .then(response => {
            const { status } = response 

            if(status === 200)  //si todo va bien
            return response.json()  //el payload es el usuario, esta promesa me devuelve el usuario

            else if (status >= 400 && status < 500)
            return response.json().then(payload => { throw new Error(payload.error)})
            else if (status >= 500)
            throw new Error('server error')
            else 
            throw new Error('unknown error')
        })


}

export default retrieveUser