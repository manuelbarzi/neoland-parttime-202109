import { useState, useEffect } from 'react'
import logger from '../logger'
import retrieveVehicle from '../logic/retrieve-vehicles'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'
import addToCart from '../logic/add-vehicle-to-cart'
import Fav from './Fav'

function Detail({ itemId, onReturnClick }) {
    const [vehicle, setVehicle] = useState(null)

    useEffect(() => {
        logger.debug('Detail-> component did mount')

        try {
            retrieveVehicle(itemId, sessionStorage.token, (error, vehicle) => {
                if (error) return alert(error.message)

                setVehicle(vehicle)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const goBack = () => {
        onReturnClick()
    }

    const toggle = (vehicle) => {
        try {
            toggleFavVehicle(vehicle.id, sessionStorage.token, error => {
                if (error) return alert(error.message)

                const update = {}

                for (const key in vehicle)
                    update[key] = vehicle[key]

                update.isFav = !update.isFav

                setVehicle(vehicle)

            })
        } catch (error) {
            alert(error.message)
        }
    }

    const add = (vehicle) => {
        try {
            addToCart(vehicle.id, sessionStorage.token, error => {
                if (error) return alert(error.message)
                //TODO feedback para que el usuario se entere de que el coche se ha añadido al carrito
            })
        } catch (error) {
            return alert(error.message)
        }
    }

    logger.debug('Detail-> render')

    if (vehicle)
        return <div>
            <button onClick={goBack}>Return to results</button>
            <h2>{vehicle.name}</h2>
            <Fav selected={vehicle.isFav} onClick={()=>toggle(vehicle)} />
            <button onClick={()=>add(vehicle)}>Add to Cart</button>
            <img src={vehicle.image} />
            <p>{vehicle.price}</p>
            <p>{vehicle.color}</p>
            <p>{vehicle.style}</p>
            <p>{vehicle.year}</p>
            <p>{vehicle.description}</p>
            <a href={vehicle.url}>original item</a>
        </div>
    else
        return null

}

export default Detail
