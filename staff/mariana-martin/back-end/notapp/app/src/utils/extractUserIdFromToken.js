//Cómo extraígo el id del usuario desde el token ???  

// Tengo el token, se divide en 3 partes divididos en 3 retrievePublicNotes:
// Tengo dentro del token el payload que es la 2 parte del token
// Ahí convieerto de base64 a string  atob(sdfsjnnvTOKENjffnfsf) y me da como resultado el string 
//A ese string parsearlo y dará estos datos: exp:xxxxxxx  iat: xxxxxx sub: "el numero de id del user"
// Y ahora del sub y lo llamaré userId, que es lo que quiero regresar 



export default function(token) {

    const [, payload64] = token.split('.')   //divido en partes por el punto y a mi me interesa la 2 parte que es el payload

    const payloadJson = atob(payload64)  //parseo a payloadJson a partir del atob 

    const { sub: userId } = JSON.parse(payloadJson) //el payload lo parseo, me interesa sólo sub y le llamo userId

    return userId
}

//ahora si llamo la función:
// extracUserIdFromToken(sessionStorage.token)  
//y me traerá el id del user