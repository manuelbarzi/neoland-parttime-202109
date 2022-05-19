const { verify } = require('jsonwebtoken')
const { env: { JWT_SECRET } } = process

const extractCompanyIdFromAuthorization = req => {
    const { headers: { authorization } } = req

    const [, token] = authorization.split(' ')

    const { sub: companyId } = verify(token, JWT_SECRET)

    return companyId
}

module.exports = {
    extractCompanyIdFromAuthorization
}