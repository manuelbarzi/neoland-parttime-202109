function searchVehicles (query, callback){

    if(typeof query !== 'string' ) throw new TypeError(query + ' is not a string')
    if(!query.trim()) throw new Error('query is empty or blank')
    if(typeof callback !== 'function') throw new TypeError (callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

    xhr.onload = function(){
        if(this.status === 200){
            var user = JSON.parse(this.responseText)
            callback(null, user)
        } else {
            var res = JSON.parse(this.responseText)
            var error =  res.error
            callback(new Error(error))
        }

    }
    xhr.send()
}