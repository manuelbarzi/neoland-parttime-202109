class Cart extends React.Component {
    constructor(){
        super()
        this.state = {
            cart : null

        }
    }

    getUserCart = ()=>{
        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {console.log(error.message);
            }else {
             let userCart = user.cart;
             let cartVehicles = []
             console.log(userCart)
             
             if(userCart){
                userCart.map((vehicle) => {
                    retrieveVehicle(sessionStorage.token, vehicle.id, (error, vehicle) => {
                        if (error) console.log(error.message);
                        else {
                            cartVehicles.push(vehicle)
                            this.setState({cart : cartVehicles})
                        }
                    })
                })
             }else console.log(' cart not found ')
            }
        })
    }

    componentDidMount(){
        this.getUserCart()
    }

    render(){
        let cartVehicles = this.state.cart
        return(
            <div className="cart-container panel cart-panel">
                <h2>Cart</h2>

               { this.state.cart ? (
                   <ul>
                       {cartVehicles.map((vehicle)=>{
                           return(
                           <li className="cart-list-item" key={vehicle.id}>
                           <img className="cart-list-item-img" src={vehicle.image}></img>
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
}