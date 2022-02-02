import { useState, useEffect } from 'react'
import logger from '../logger'
import searchVehicles from '../logic/search-vehicles'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'
import Fav from './Fav'

function Results({ query, onItemClick }) {
    const [vehicles, setVehicles] = useState(null)

    useEffect(() => {
        logger.debug('Results -> component did mount & component will recive props')

        try {
            searchVehicles(query, sessionStorage.token)
                //.then(setVehicles)
                .then(vehicles => setVehicles(vehicles))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [query])

    const showDetail = id => {
        onItemClick(id)
    }

    const toggle = vehicle => {
        try {
            toggleFavVehicle(vehicle.id, sessionStorage.token)
                .then( () => {
                    const update = {}

                    for (const key in vehicle)
                        update[key] = vehicle[key]

                    update.isFav = !update.isFav

                    const _vehicles = vehicles.map(_vehicle => {
                        if (_vehicle.id === vehicle.id)
                            return update

                        return _vehicle
                    })

                    setVehicles(_vehicles)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    logger.debug('Results-> render')

    if (vehicles) {
        if (vehicles.length)
            return <ul>
                {vehicles.map(vehicle => <li key={vehicle.id}>
                    <h2>{vehicle.name}</h2>
                    <Fav selected={vehicle.isFav} onClick={() => toggle(vehicle)} />
                    <img src={vehicle.thumbnail} onClick={() => showDetail(vehicle.id)} />
                    <span>{vehicle.price} $</span>
                </li>)}
            </ul>
        else
            return <p>No results</p>
    } else
        return null
}
export default Results