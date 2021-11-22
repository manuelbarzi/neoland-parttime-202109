function authenticateUser(username, password, callback) {

    if (typeof username !== 'string') throw new TypeError (username + ' is not a string') 
    if (!username.trim()) throw new Error ('name is empty or blank')

    if (typeof password !== 'string') throw new TypeError (password + ' is not a string') 
    if (!password.trim()) throw new Error ('name is empty or blank')
    if(password.trim().length < 8) throw new Error('password length is smaller than 8 characters')


    if(typeof callback!== 'function') throw new Error(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.open ('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.addEventListener('load', function() {

        if (this.status === 401) {
            var res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error(error))

        } else if (this.status === 200) {
            var res = JSON.parse(this.responseText)
            var token = res.token
            callback(null, token)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json')
    
    var data = {}
    
    data.username = username
    data.password = password

    var json = JSON.stringify(data)

    xhr.send(json)
}


//authenticateUser('ycph92', '123123123', console.log)
