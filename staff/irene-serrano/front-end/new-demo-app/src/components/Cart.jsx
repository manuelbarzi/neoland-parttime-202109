import { useState, useEffect } from 'react';

import retrieveVehiclesFromCart from '../logic/retrieve-vehicles-from-cart'



function Cart (){
    const [cart, setCart] = useState(null)


    useEffect(()=>{
       try {
           retrieveVehiclesFromCart(sessionStorage.token, (error, cartVehicles)=>{
               if(error){
                   console.error(error.message)
               } else{
                   setCart(cartVehicles)
               }
           })
       } catch (error) {
        console.error(error.message)
       }
    })


        return(
            <div className="cart-container panel cart-panel">
                <h2>Cart</h2>

               { cart ? (
                   <ul>
                       {cart.map((vehicle)=>{
                           return(
                           <li className="cart-list-item" key={vehicle.id}>
                           <img className="cart-list-item-img" src={vehicle.image} alt={vehicle.name}></img>
                           <p className="cart-list-item-name">{vehicle.name}</p>
                           <p className="cart-list-item-price">{vehicle.price}$</p>
                           <span
                             onClick={() =>
                               alert("TODO => onclick to delte fav vehicle")
                             }
                             className="cart-list-item-delete selectable"
                           >
                             🗑️
                           </span>
                         </li>
                         )
                       })}
                   </ul>
               ): (
                   <h2> NO HAY COCHES</h2>
               )}

            </div>
        )
}
export default Cart

