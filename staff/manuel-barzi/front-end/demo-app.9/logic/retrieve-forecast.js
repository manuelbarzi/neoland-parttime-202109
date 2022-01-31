function retrieveForecast(apiKey, city, callback) {
    if (typeof apiKey !== 'string') throw new TypeError('api key is not string')
    if (!apiKey.trim()) throw new Error('api key is empty or blank')

    if (typeof city !== 'string') throw new TypeError('city is not string')
    if (!city.trim()) throw new Error('city is empty or blank')

    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('GET', `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=${apiKey}&dataElements=default&locations=${city}`)

    xhr.onload = () => {
        const { status } = xhr

        if (status === 200) {
            const { responseText: json } = xhr

            var res = JSON.parse(json)

            if (res.errorCode) return callback(new Error(res.message))

            callback(null, res.location.values.slice(0, 3))
        } else if (status >= 400 && status < 500) {
            callback(new Error('client error'))
        } else callback(new Error('server error'))
    }

    xhr.send()
}