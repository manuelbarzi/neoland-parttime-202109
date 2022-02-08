

function retrieveForecast(apiKey, city) {
    if(typeof apiKey !== 'string') throw new TypeError (apiKey + ' is not string')
    if(!apiKey.trim()) throw new Error('api key is empty or blank')

    if(typeof city !== 'string') throw new TypeError(city + ' is not string')
    if(!city.trim()) throw new Error('city is empty or blank')

   

    ///NUEVO PROMISES:

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest

        xhr.open('GET', `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=${apiKey}&dataElements=default&locations=${city}` )
        
        xhr.onload = () => {

            const { status } = xhr

                if(status === 200 ) {
                    const { responseText: json } = xhr
                    var res = JSON.parse(json)

                    if (res.errorCode) return reject(new Error(res.message))

                        resolve(res.location.values.slice(0,3))
                } else if (status >= 400 && status < 500) {
                    reject(new Error('client error'))
                }else reject(new Error('server error'))
            }
            
    xhr.send()
    })

}

export default retrieveForecast