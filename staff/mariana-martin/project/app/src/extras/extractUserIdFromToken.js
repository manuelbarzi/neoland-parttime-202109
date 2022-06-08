 function extractUserIdFromToken (token) {
    
    const [,payload64] = token.split('.')

    const payloadJson = atob(payload64)

    const { sub: userId } = JSON.parse(payloadJson)

    return userId
}
export default extractUserIdFromToken