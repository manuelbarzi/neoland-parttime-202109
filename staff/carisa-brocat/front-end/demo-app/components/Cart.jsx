class Cart extends React.Component {
    constructor() {
        super()

        this.state = {
            cartVehicles: null,
        }

    }

    componentDidMount() {
        logger.debug('Cart -> Component did Mount')

        try {
            retrieveCartVehicles(sessionStorage.token, (error, cartVehicles) => {
                if (error) alert(error.message)

                this.setState({ cartVehicles })
            })

        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        logger.debug('Cart -> render')

        if (this.state.cartVehicles) {
            if (this.state.cartVehicles.length) {
                // const totalPrice = this.state.cartVehicles.reduce(((previous,current)=> previous + current.price), 0)
   
                let totalPrice = 0
                for(let key in this.state.cartVehicles){
                    const vehicle = this.state.cartVehicles[key]
                    totalPrice = totalPrice + vehicle.price
                }
                
                return<div>
                    <ul>
                    {this.state.cartVehicles.map(vehicle => <li key={vehicle.id}>
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
                return <p>You dont have any car to the trolley</p>  
            }
        }
        return null
    }
}