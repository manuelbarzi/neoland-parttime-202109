import { useState, useEffect } from 'react'
import logger from '../logger'
import retrieveFavVehicles from '../logic/retrieve-fav-vehicles'
import Fav from './Fav'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'


function Favorites (onItemClick){
    const [vehiclesId, setVehiclesId] =useState(null)

   useEffect(() => {  
        logger.debug('favs -> component did mount' )
        try {
            retrieveFavVehicles(sessionStorage.token)
            .then (vehicles => setVehiclesId(vehicles))
            .catch(error => alert(error.message))
        }
        catch (error) {
            alert(error.message)
        }
    },[]) 

        if (vehiclesId) {
            if (vehiclesId.length)
            return <ul>
                {vehiclesId.map(vehicle=><li key={vehicle.id}>
                    <h2>{vehicle.name}</h2>
                    <Fav selected={vehicle.isFav} onClick={()=>{
                        try{
                            toggleFavVehicle(sessionStorage.token,vehicle.id, error =>{
                                if (error) return alert(error.message)

                                const vehicles = vehiclesId.filter(_vehicle=> _vehicle.id !== vehicle.id)
                            
                                setVehiclesId(vehicles)
                            })
                        } catch (error){
                            alert(error.message)
                        }



                    }}/>
                    <img src={vehicle.image} onClick={() =>onItemClick(vehicle.id)}/>
                    <span>{vehicle.price} $</span>
                </li>)}



            </ul> 
            else
            return <p>No favs :(</p>
        } else
        return null
    }


export default Favorites