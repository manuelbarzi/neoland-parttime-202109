const extracUserIdFromAuthorization = req => {
    const { headers: { authorization } } = req // la cabecera de respuesta es > Authorization: Bearer + id
    const [, id] = authorization.split(' ')

    return id
}

module.exports = {
    extracUserIdFromAuthorization
}