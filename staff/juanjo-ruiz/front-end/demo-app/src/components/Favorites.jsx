import { useState, useEffect } from 'react'
import retrieveFavVehicles from '../logic/retrieve-fav-vehicles'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'
import Fav from './Fav'

function Favorites({ onClickedHome, onItemClick }) {
    const [vehicles, setVehicles] = useState(null)


    useEffect(() => {
        try {
            retrieveFavVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)

                setVehicles(vehicles)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const toogleFav = vehicle => {
        try {
            toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                if (error) return alert(error.message)

                const vehicles = vehicles.filter(_vehicle => _vehicle.id !== vehicle.id)

                setVehicles(vehicles)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const goToHome = event => {
        event.preventDefault()

        onClickedHome()
    }

    const showDetail = vehicle => onItemClick(vehicle.id)

    if (vehicles) {
        if (vehicles.length)
            return <div>
                <p><a href="" onClick={goToHome}>Inicio</a></p>
                <h1 className='title-form'>Favoritos</h1>
                <ul>
                    {vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <Fav selected={vehicle.isFav} onClick={toogleFav} />
                        <img className='img-list' src={vehicle.image} onClick={showDetail} />
                        <span>{vehicle.price} €</span>
                    </li>)}
                </ul>
            </div>
        else
            return <p className="container feedback-error">No hay favoritos</p>
    } else
        return null
}

export default Favorites