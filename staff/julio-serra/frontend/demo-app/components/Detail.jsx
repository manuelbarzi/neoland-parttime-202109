class Detail extends React.Component {
    constructor() {
        super()

        this.state = { vehicle: null }
    }

    // cuando se monte el monto que llame a la logica que hemos creado
    componentDidMount() {
        try {
            retrieveVehicle(this.props.itemId, (error, vehicle) => {
                if (error) return alert(error.message)

                this.setState({ vehicle }) //por defecto lo tenemos en null cuando se repinte mostrara la info
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        if (this.state.vehicle) {
            return <div>
                <h2>{this.state.vehicle.name}</h2>
                <img src={this.state.vehicle.image} />
                <p>{this.state.vehicle.description}</p>
                <p>{this.state.vehicle.price} €</p>
                <p>{this.state.vehicle.color}</p>
                <p>{this.state.vehicle.style}</p>
                <a href={this.state.vehicle.url} target="_blank" >Original Item</a>
            </div>
        }else
            return null
    }
}























// class Detail extends React.Component {
//     constructor() {
//         super()

//         this.state = { vehicle: null }
//     }

//     componentDidMount() {

//         try {
//             retrieveVehicle(this.props.itemId, (error, vehicle) => {
//                 if (error) return alert(error.message)

//                 this.setState({ vehicle })
//             })
//         } catch (error) {
//             alert(error.message)
//         }
//     }

//     render() {

//         if (this.state.vehicle)
//             return <div>
//                 <h2>{this.state.vehicle.name}</h2>
//                 <img src={this.state.vehicle.image} />
//                 <p>{this.state.vehicle.description}</p>
//                 <p>{this.state.vehicle.price} $</p>
//                 <p>{this.state.vehicle.color}</p>
//                 <p>{this.state.vehicle.style}</p>
//                 <p>{this.state.vehicle.year}</p>
//                 <a href={this.state.vehicle.url} target="_blank">original item</a>
//                 <p><button>Go Back</button></p>
//             </div>
//         else
//             return null
//     }
// }