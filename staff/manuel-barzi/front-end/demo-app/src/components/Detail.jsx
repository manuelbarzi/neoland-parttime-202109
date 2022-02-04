import { useState, useEffect } from 'react'
import logger from '../logger'
import retrieveVehicle from '../logic/retrieve-vehicle'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'
import addVehicleToCart from '../logic/add-vehicle-to-cart'
import Fav from './Fav'
import { useParams } from 'react-router-dom'

function Detail() {
    const [vehicle, setVehicle] = useState(null)
    const { vehicleId } = useParams()

    useEffect(() => {
        logger.debug('Detail -> component did mount')

        try {
            retrieveVehicle(sessionStorage.token, vehicleId, (error, vehicle) => {
                if (error) return alert(error.message)

                setVehicle(vehicle)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const toggleFav = () => {
        try {
            toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                if (error) return alert(error.message)

                const update = {}

                for (const key in vehicle)
                    update[key] = vehicle[key]

                update.isFav = !update.isFav

                setVehicle(update)

            })
        } catch (error) {
            alert(error.message)
        }
    }

    const addToCart = () => {
        try {
            addVehicleToCart(sessionStorage.token, vehicle.id)
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }


    logger.debug('Detail -> render')

    if (vehicle)
        return <div>
            <h2>{vehicle.name}</h2>
            <Fav selected={vehicle.isFav} onClick={toggleFav} />
            <button onClick={addToCart}>Add to cart</button>
            <img src={vehicle.image} />
            <p>{vehicle.description}</p>
            <p>{vehicle.price} $</p>
            <p>{vehicle.color}</p>
            <p>{vehicle.style}</p>
            <p>{vehicle.year}</p>
            <a href={vehicle.url}>original item</a>
        </div>
    else
        return null
}

export default Detail