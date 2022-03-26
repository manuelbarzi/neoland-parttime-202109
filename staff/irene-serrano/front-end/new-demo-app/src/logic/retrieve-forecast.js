import { validateApikey, validateCity} from './helpers/validators'


function retrieveForecast (apiKey, city){
    validateApikey(apiKey)
    validateCity(city)
  

    return fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=' + apiKey + '&dataElements=default&locations=' + city, {
        method:'GET'
    }).then(response =>{     
        var res = JSON.parse(response)
        console.log(response)
        if(res.errorCode) throw new Error(res.message)
        console.log('Not parsed response '+ response)
   
        
        return res.location.values.slice(0,3)
              
    }
        
    )
    
   /*  var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=' + apiKey + '&dataElements=default&locations=' + city)

    xhr.onload = function () {
        var res = JSON.parse(this.responseText)

        if(res.errorCode) return callback(new Error(res.message))

        callback(null, res.location.values.slice(0,3))
    }

    xhr.send() */
}
export default retrieveForecast