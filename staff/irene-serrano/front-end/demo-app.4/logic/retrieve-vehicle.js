function retrieveVehicle(id, callback){
    if(typeof id !== 'string') throw new TypeError('id is not string')
    if(!id.trim()) throw new Error('id is empty or blank')

    if(typeof callback !== 'function') throw new TypeError(callback + 'is not a function')

    var xhr = new XMLHttpRequest
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

    xhr.onload = function (){
        if (this.status === 200){
            var vehicle = JSON.parse(this.responseText)
            callback(null, vehicle)
        } else {
            
            var error = res.error

            callback(new Error(error))
        }
    }

    xhr.send()
}