import { validateCity, validateCountry, validateName, validatePassword, validateUsername } from "./helpers/validators"

function registerUser(name, city, country, username, password){

    validateName(name)
    validateCity(city)
    validateCountry(country)
    validateUsername(username)
    validatePassword(password)

//Usando FETCH que retorna promesa:

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        method: 'POST',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({ name, city, country, username, password })
    } )

        .then(response => {
            const { status } = response

            if(status === 201)  //si todo va bien, no devuelve nada como en insomnia
            return  //return y que se vaya del callback

            else if (status >= 400 && status < 500)
            return response.json().then(payload => { throw new Error(payload.error)})  //el error (el payload) se parsea
            else if (status >= 500)
            throw new Error ('server error')
        })


}

export default registerUser