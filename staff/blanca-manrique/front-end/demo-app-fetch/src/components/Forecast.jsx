import { useState, useEffect } from 'react'
import logger from "../logger"
import retrieveForecast from '../logic/retrieve-forecast'
import './Forecast.css'

function Forecast({apiKey, city}) {
    const [values, setValues] = useState(null)

    useEffect(() => {
        logger.debug('Forecast ->  did mount')

        try {
            retrieveForecast(apiKey,city)
            .then((values) => setValues(values))
            .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }, [])

    logger.debug('Forecast-> render')

    if (values) {
        return <div className='forecast'>
            <h3>Forecast in {city}</h3>
            <ul className='forecast__list'>
                {values.map(value => <li key={value.datetimeStr}>{new Date(value.datetimeStr).toString().slice(0, 10)}, {value.temp} ºC</li>)}
            </ul>
        </div>
    } else return null

}

export default Forecast