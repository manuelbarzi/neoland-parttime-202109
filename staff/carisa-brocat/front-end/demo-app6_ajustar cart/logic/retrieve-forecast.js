function retrieveForecast(apiKey, city, callback) {
    validateApyKey(apiKey)
    validateCity(city)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('GET', `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=${apiKey}&dataElements=default&locations=${city}`)

    xhr.addEventListener('load', () => {
        const { responseText: json } = xhr
        
        const payload = JSON.parse(json)

        if (payload.errorCode) {
            return callback(new Error(payload.message))
        }
        else {
            callback(null, payload.location.values.slice(0, 3))
        }
    })

    xhr.send()

}