export default function(token) {
    //token = headers.payload.firmadigital
    const [,payload64] = token.split('.') //split: me devuelve un nuevo array con 3 elementos --> cada elemento es una de las 3 partes que tiene el token. Divido el token por sus puntos
    //Del nuevo array que devuelve el split sólo me interesa el segundo elemento (payload). Ese payload está en formato base64
    const payloadJson = atob(payload64) //convierto el payload de base64 a json gracias a la función atob
    const { sub: userId } = JSON.parse(payloadJson)//convierto el json a objeto: el objeto payload tiene 3 propiedades payload.sub(userId), payload.iat(fecha creación), payload.exp (expiración)
    //destructuro y del objeto payload sólo quiero la propiedad sub, la cual referencio en userId
    return userId
}