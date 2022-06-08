import { validators, errors } from 'commons'
//en react no se puede destructurar más niveles como en api
const { validateName, validateEmail, validatePassword } = validators
const { DuplicityError, ClientError, ServerError } = errors

function registerNutritionist(name, email, password) {
    validateName(name, 'nutritionist name')
    validateEmail(email, 'nutritionist email')
    validatePassword(password, 'nutritionist password')

    return fetch('http://localhost:8080/api/nutritionist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'  //el contenido que envío
        },
        body: JSON.stringify({ name, email, password }) //esto envío
    })
        //una vez que el fetch haya respondido:
        .then(res => {
            const { status } = res

            if (status === 201) {
                return  //si todo ha ido bien retornamos y ya
            } else if (status >= 400 && status < 500)
                return res.json() //de la respuesta que me da api de json convierto a objeto:
                    .then(payload => {   //el json es el payload, es la respuesta
                        const { error: message } = payload  //extraigo el error de la respuesta (de la api)

                        if (status === 409)
                            throw new DuplicityError(message) //mensaje que sale en api
                        else
                            throw new ClientError(message)
                    })
            else if (status >= 500) //los 500 no se sabe que error es, puede que no sea json
                return res.text() //nos traemos el texto, aquí no se convirtió a json
                    .then(text => {  //no es payload es texto
                        throw new ServerError(text)
                    })
        })
}

export default registerNutritionist