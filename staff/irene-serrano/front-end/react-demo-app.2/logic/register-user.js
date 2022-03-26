function registerUser (username, email, city, password, callback){
    validateUsername(username)
    validatePassword(password)
    validateEmail(email)
    validateCity(city)
    validateCallback(callback)


    const xhr = new XMLHttpRequest

    xhr.open("POST", "https://b00tc4mp.herokuapp.com/api/v2/users")

    xhr.addEventListener('load',function (){
        if(this.status === 400) {
            var res = JSON.parse(this.responseText)
            var error = res.error

            callback(new Error(error))
        } else if(this.status === 409){
            var error = "Sorry, this user already exists."
            callback(new Error(error))
        } else if
        (this.status === 201){
            callback(null)
        }
    } )


    xhr.setRequestHeader("Content-type", "application/json");

    var data = { username: username, email: email, city:city, password: password }
    var json = JSON.stringify(data);
    xhr.send(json)

}