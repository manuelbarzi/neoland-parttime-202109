import { useState, useEffect } from 'react'
import searchVehicles from '../logic/search-vehicles'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'

function Results({ query, onItemClick }) {
    const [vehicles, setVehicles] = useState(null)

    useEffect(() => {
        logger.debug('Results -> component did mount')

        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) return alert(error.message)

                setVehicles(vehicles)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [query])

    const toogleFav = vehicle => {
        try {
            toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                if (error) return alert(error.message)

                const update = {}

                for (const key in vehicle)
                    update[key] = vehicle[key]

                update.isFav = !update.isFav

                const vehicles = vehicles.map(_vehicle => {
                    if (_vehicle.id === vehicle.id)
                        return update

                    return _vehicle
                })

                setVehicles(_vehicles)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const showDetail = id => onItemClick(id)

    logger.debug('Results -> render')

    if (vehicles) {
        if (vehicles.length)
            return <ul>
                {vehicles.map(vehicle => <li key={vehicle.id}>
                    <h2>{vehicle.name}</h2>
                    <Fav selected={vehicle.isFav} onClick={toogleFav(vehicle)} />
                    <img src={vehicle.thumbnail} onClick={showDetail(vehicle.id)} />
                    <span>{vehicle.price} €</span>
                </li>)}
            </ul>
        else
            return <p className="feedback-error">No hay resultados con estos criterios</p>
    } else
        return null
}

export default Results
