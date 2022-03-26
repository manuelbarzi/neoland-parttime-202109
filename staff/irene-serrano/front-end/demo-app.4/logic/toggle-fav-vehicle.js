function toggleFavorite (token, id, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')

    if (typeof id !== 'string') throw new TypeError('id is not string')
    if (!id.trim()) throw new Error('id is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function() {
        if(this.status === 401){
            var res = JSON.parse (this.responseText)

            var error = res.error
            callback(new Error (error))

        } else if (this.status === 200){
            const user = JSON.parse(this.responseText)

            const favs = user.favs || []

            const index = favs.indexOf(id)

            if(index < 0 )
                favs.push(id)
            else 
                favs.splice(index, 1)
            callback(null)
        }
    })

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.setRequestHeader('Content-type', 'application/json')

    var json = JSON.stringify(data)
    xhr.send(json)


}