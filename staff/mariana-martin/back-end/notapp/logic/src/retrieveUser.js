const { User } = require('data/src/models')

function retrieveUser(userId){
    //Validations

    return User.findById(userId)
        .then(user => {
            const doc = user._doc

            //sanitize doc(limpia el doc para enviarlo con los campos que se requieren(sin el guión bajo, sin contraseña y sin .__v))

            doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v
                delete doc.password

                return doc
        })
}

module.exports = retrieveUser

//para probar esta lógica puede ser en insomnia(la uso en la API en el index) o en el demo de esta carpeta, 