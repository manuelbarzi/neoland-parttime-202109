import {useState, useEffect} from 'react'
import retrieveCartVehicles from '../logic/retrieve-cart-vehicles'
import removeCartVehicle from '../logic/remove-cart-vehicle'

function Cart ({onItemClick}) {
    const [cartVehicles, setCartVehicles] = useState(null)

    useEffect(()=>{
        try {
            retrieveCartVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) alert(error.message)

                setCartVehicles(vehicles)
            })

        } catch (error) {
            alert(error.message)
        }
    }, [])

    const removeVehicle = id => {
        try{ 
            removeCartVehicle( sessionStorage.token, id, error  => {
                if(error) return alert(error.message)

                const vehicles = cartVehicles

                const _vehicles = []
                let foundOnce = false

                for(let i = 0; i < vehicles.length; i++){
                    const _vehicle = vehicles[i]

                    if (!foundOnce) {
                        if (_vehicle.id === id) {
                            foundOnce = true
                        } else {
                            _vehicles.push(_vehicle)
                        }
                    } else _vehicles.push(_vehicle)
                }
    
                setCartVehicles(_vehicles)

            })
        }catch(error){
            alert(error.message)
        }
    }

    
    if (cartVehicles) {
        if (cartVehicles.length) {
            // const totalPrice = cartVehicles.reduce(((previous,current)=> previous + current.price), 0)

            let totalPrice = 0
            for(let key in cartVehicles){
                const vehicle = cartVehicles[key]
                totalPrice = totalPrice + vehicle.price
            }
            
            return<div>
                <ul>
                {cartVehicles.map(vehicle => <li key={vehicle.id}>
                    <h2>{vehicle.name}</h2>
                    <img src={vehicle.image} onClick={() => onItemClick(vehicle.id)} />
                    <span>{vehicle.price} $</span>
                    <button onClick={()=> removeVehicle(vehicle.id)}>Delete</button>
                </li>
            )}
            </ul>
            <h2>Total price = {totalPrice}</h2>
            </div>
        }else{
            return <p>You dont have any car on your Cart</p>  
        }
    }
    return null
}

export default Cart
