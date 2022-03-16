const { User } = require('data/src/models')


function retrieveUser(userId){
 

//RETURN CADENA DE PROMESAS

    return User.findById(userId)
                //el user que devuelve el find es un modelo, lo que me interesa es el doc de ese model  //nos regresa el objeto, y solo nos interesa el doc plano:
        .then(user => {   
            const doc = user._doc  

            //sanitize doc(limpia el doc para enviarlo con los campos que se requieren(sin el guión bajo, sin contraseña y sin .__v))

            doc.id = doc._id.toString()  //convertir a string
                delete doc._id   //no quiero el guión bajo
                delete doc.__v   //no quiero .__ 
                delete doc.password   //no regreso el psw cuando recupero

                return doc
        })
}

module.exports = retrieveUser

//para probar esta lógica puede ser en insomnia(la uso en la API en el index) o en el demo de esta carpeta, 