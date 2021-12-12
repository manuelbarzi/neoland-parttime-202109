function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not string')
    if (!query.trim()) throw new Error('query is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

    // lanzamos el callback

    xhr.addEventListener('load', function () {

        if (this.status === 200) {
            var vehicles = JSON.parse(this.responseText)
            callback(null, vehicles)
        } else {
            var res = JSON.parse(this.responseText)

            //declaramos la variable error 
            var error = res.error
            callback(new Error, error)
        }



        // if (this.status === 401) {
        //     var res = JSON.parse(this.responseText)
        //     var error = res.error
        //     callback(new Error(error))
        // } else if (this.status === 200) {
        //     var user = JSON.parse(this.responseText)

        //     callback(null, user)
        // }
    })

    // xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send()

}