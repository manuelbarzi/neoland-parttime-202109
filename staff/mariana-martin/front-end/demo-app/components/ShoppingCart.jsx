class ShoppingCart extends React.Component {
    constructor() {
        super()

        this.state = {
            
            shoppingcart: null,
        }
    }

        componentDidMount() {
            logger.debug('Cart -> Component did Mount')
    
            try {
                retrieveCartVehicles(sessionStorage.token, (error, shoppingcart) => {
                    if (error) alert(error.message)
    
                    this.setState({ shoppingcart })
                })
    
            } catch (error) {
                alert(error.message)
            }
        
            render()
            if (this.state.shoppingcart){
                if(this.state.shoppingcart.length){

                    const totalPrice = 0
                    for(const key in this.state.shoppingcart){
                        const vehicle = this.state.shoppingcart[key]
                        totalPrice = totalPrice + vehicle.price
                    }

                    return<div>
                    <ul>
                    {this.state.shoppingcart.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <img src={vehicle.image} onClick={() => this.props.onItemClick(vehicle.id)} />
                        <span>{vehicle.price} $</span>
                        <button>Delete</button>
                    </li>
                )}
                </ul>
                <h2>Total price = {totalPrice}</h2>
                </div>

        }else{
         return <p> Empty Shopping Cart </p> 
                }
            }
            return null

    }}