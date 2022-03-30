//lógica de cliente 
//el import sólo nos permite sólo 1 nivel de destructuring:
import { validators } from 'commons'
const { validateName, validateEmail, validatePassword } = validators

function registerUser(name, email, password){
validateName(name)
validateEmail(email)
validatePassword(password)

//retornamos la promesa que devuelve el fetch y object con method headers y body
return fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
})

    .then(res => {
        const { status } = res

        if(status === 201 )
            return
            else if (status >=400 && status < 500) 
            throw new Error('client error')
            else if (status >= 500)
            throw new Error('server error')
    })
}

export default registerUser