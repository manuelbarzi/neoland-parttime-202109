function retrieveForecast(apiKey, city, callback) {
    var xhr = new XMLHttpRequest

    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=' + apiKey)

    // lanzamos el callback

    xhr.addEventListener('load', function() {

        if (this.status === 200) {
            var res = JSON.parse(this.responseText)

            callback(null, res.list.slice(0, 2))
        }
        else {
            var res = JSON.parse(this.responseText)
            var error = res.error

            callback(new Error(error ))
        }


        // if (this.status === 401) {
        //     var res = JSON.parse(this.responseText)
        //     var error = res.error
        //     callback(new Error(error))
        // } else 
        // if (this.status === 200) {
        //     var res = JSON.parse(this.responseText)

        //     callback(null, res.list.slice(0, 3))
        // }
    })


    xhr.send()

}