export default function(token) {
    const [,payload64] = token.split('.')

    const payloadJson = atob(payload64)

    const { sub: userId } = JSON.parse(payloadJson)

    return userId
}