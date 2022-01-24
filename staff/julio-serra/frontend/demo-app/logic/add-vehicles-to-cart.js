function addVehiclesToCart(token, id, callback) {
    validateToken(token)
    validateId(id)
    validateCallback(callback)


    let xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', () => {
        const { status } = xhr

        if (status === 401) {
            const { responseText: json } = xhr
            const payload = JSON.parse(json)
            const { error } = payload

            callback(new Error(error))
        }
        else if (status === 200) {
            let { responseText: json } = xhr
            let payload = JSON.parse(json)

            const { addCart = [] } = payload
            let item = addCart.find(item => item.id === id)

            if (item) {
                item.qty++;
            }
            else {
                item = { id, qty: 1 }
                addCart.push(item)
            }

            xhr = new XMLHttpRequest
            
            xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr.addEventListener('load', () => {
                const { status } = xhr

                if (status === 400 || status === 401 || status === 409) {
                    const { responseText: json } = xhr
                    const payload = JSON.parse(json)
                    const { error } = payload

                    callback(new Error(error))
                }
                else if (status === 204) {
                    callback(null)
                }
            })
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr.setRequestHeader('Content-type', 'application/json')
            payload = { addCart }
    
            json = JSON.stringify(payload)
            xhr.send(json)
        }
    })

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
 
}