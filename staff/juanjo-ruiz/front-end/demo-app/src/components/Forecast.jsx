import { useState, useEffect } from 'react'
import retrieveForecast from '../logic/retrieve-forecast'


function Forecast() {

    const [values, setValues] = useState(null)

    useEffect(() => {
        try {
            retrieveForecast(apiKey, city, (error, values) => {
                if (error) return alert(error.message)

                setValues(values)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    if (values) {
        return <div>
            <h3>Pronóstico en {city}</h3>
            <ul>
                {values.map(value => <li key={value.datetimeStr}>{value.temp} ºC, {new Date(value.datetimeStr).toLocaleString().slice(0, 10)}</li>)}
            </ul>
        </div>
    } else
        return null
}

export default Forecast