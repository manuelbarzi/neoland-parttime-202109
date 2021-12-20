function retrieveForecast(apiKey, city, callback) {
    if (typeof apiKey !== 'string') throw new TypeError(apiKey + 'is not string')
    if (!apiKey.trim()) throw new Error('apiKey es empty or blank')

    if (typeof city !== 'string') throw new TypeError(city + 'is not a string')
    if (!city.trim()) throw new Error('city is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + 'ies not a function')


    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=' + apiKey + '&dataElements=default&locations=' + city)

    xhr.onload = function () {
        var res = JSON.parse(this.responseText)

        if (res.errorCode) {
            return callback(new Error(res.message))
        }
        else {
            callback(null, res.location.values.slice(0, 3))
        }
    }

    xhr.send()

}