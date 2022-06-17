import { validators, errors } from 'commons'

const { validateToken } = validators
const { AuthError, NotFoundError, FormatError, ClientError, ServerError } = errors

function retrieveAllOrders(token) {
    validateToken(token)

    return fetch('http://localhost:8080/api/orders', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                .then(orders => { //tenemos que pasar la propiedad order.createdAt de formato String a formato FECHA!!
                    orders.forEach(order => order.createdAt = new Date(order.createdAt))

                    return orders
                })
            else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload

                        if (status === 400)
                            throw new FormatError(message)
                        if (status === 401)
                            throw new AuthError(message)
                        else if (status === 404)
                            throw new NotFoundError(message)
                        else
                            throw new ClientError(message)
                    })
            else if (status >= 500)
                return res.text()
                    .then(text => {
                        throw new ServerError(text)
                    })
        })
}

export default retrieveAllOrders