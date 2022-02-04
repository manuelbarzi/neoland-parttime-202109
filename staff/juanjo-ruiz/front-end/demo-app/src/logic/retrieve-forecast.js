import { validateApikey, validateCity, validateCallback } from './helpers/validators'

function retrieveForecast(apiKey, city, callback) {
    validateApikey(apiKey)
    validateCity(city)
    validateCallback(callback)


    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest

        xhr.open('GET', 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=' + apiKey + '&dataElements=default&locations=' + city)

        xhr.onload = function () {
            const { status } = xhr

            if (status === 200) {
                const { responsetext: json } = xhr

                var res = JSON.parse(json)

                if (res.errorCode) return callback(new Error(res.message))

                resolve(res.location.values.slice(0, 3))
            } else if (status >= 400 && status < 500) {
                reject(new Error('client error'))
            } else reject(new Error('server error'))

        }

        xhr.send()
    })
}

export default retrieveForecast