const extractUserIdFromAuthorization = req => {
    const { headers: { authorization } } = req

    const [, userId] = authorization.split(' ')

    return userId
}

module.exports = {
    extractUserIdFromAuthorization
}