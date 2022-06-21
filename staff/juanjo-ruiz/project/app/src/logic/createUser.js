import { validators, errors } from 'commons'

const { validateToken, validateString, validatePassword, validateEmail, validatePhone, validateDate } = validators
const { DuplicityError, ClientError, ServerError } = errors

export default function (token, id, name, email, password, phone, dischargeDate, role) {
    validateToken(token)
    validateString(id, 'id')
    validateString(name, 'name')
    validateEmail(email)
    validatePassword(password)
    validatePhone(phone)
    validateDate(dischargeDate)
    validateString(role, 'role')

    return fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, email, password, role })
    })
        .then(res => {
            const { status } = res

            if (status === 201)
                return
            else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload

                        if (status === 409)
                            throw new DuplicityError(message)
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