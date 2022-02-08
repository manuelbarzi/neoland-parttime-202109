const { useState, useEffect } = React

function Results({ query, onItemClick }) {
    const [vehicles, setVehicles] = useState()

    useEffect(() => {
        logger.debug('Results -> component did mount & component will receive props')

        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) return alert(error.message)

                setVehicles(vehicles)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [query])

    const toggleFav = vehicle => {
        try {
            toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                if (error) return alert(error.message)

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
        } catch (error) {
            alert(error.message)
        }
    }

    const clickItem = id => onItemClick(id)

    logger.debug('Results -> render')

        if (vehicles) {
            if (vehicles.length)
                return <ul>
                    {vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <Fav selected={vehicle.isFav} onClick={() => toggleFav(vehicle)} />
                        <img src={vehicle.thumbnail} onClick={() => clickItem(vehicle.id)} />
                        <span>{vehicle.price} $</span>
                    </li>)}
                </ul>
            else
                return <p>No results :(</p>
        } else
            return null
}