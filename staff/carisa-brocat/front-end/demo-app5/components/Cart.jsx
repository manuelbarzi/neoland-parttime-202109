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
            retrieveCartVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) alert(error.message)

                this.setState({ cartVehicles: vehicles })
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
                        <button onClick={()=> {
                            try{ 
                                removeCartVehicle( sessionStorage.token, vehicle.id, error  => {
                                    if(error) return alert(error.message)

                                    const vehicles = this.state.cartVehicles

                                    const _vehicles = []
                                    let foundOnce = false

                                    for(let i = 0; i < vehicles.length; i++){
                                        const _vehicle = vehicles[i]

                                        if (!foundOnce) {
                                            if (_vehicle.id === vehicle.id) {
                                                foundOnce = true
                                            } else {
                                                _vehicles.push(_vehicle)
                                            }
                                        } else _vehicles.push(_vehicle)
                                    }
                        
                                    this.setState({ cartVehicles: _vehicles })

                                })
                            }catch(error){
                                alert(error.message)
                            }
                        }
                        }>Delete</button>
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
}