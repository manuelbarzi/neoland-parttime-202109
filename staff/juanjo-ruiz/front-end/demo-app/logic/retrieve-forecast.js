function retrieveForecast(apiKey, city, callback) {
    validateApikey(apiKey)
    validateCity(city)
    validateCallback(callback)

    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=' + apiKey + '&dataElements=default&locations=' + city)

    xhr.onload = function () {
        if (this.status === 200)
            var res = JSON.parse(this.responseText)

            if (res.errorCode) return callback(new Error(res.message))

            callback(null, res.location.values.slice(0, 3))
        
    }

    xhr.send()
}