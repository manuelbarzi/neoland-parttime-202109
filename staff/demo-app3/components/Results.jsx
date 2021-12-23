class Results extends React.Component {

    constructor() {

        logger.debug('Results -> construcutor')


        super()

        this.state = { vehicles: null }
    }
    componentDidMount() {
        logger.debug('Results -> did mount')

        try {
            searchVehicles(this.props.query, (error, vehicles) => {
                if (error) return alert(error.message)
                this.setState({ vehicles })
            })

        }
        catch (error) {
            alert(error.message)

        }
    }


    componentWillReceiveProps(props) {
        logger.debug('Results -> will receive props')

        try {
            searchVehicles(props.query, (error, vehicles) => {
                if (error) return alert(error.message)
                this.setState({ vehicles })
            })

        }
        catch (error) {
            alert(error.message)

        }
    }

    render() {
        logger.debug('Results -> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id} >
                        <h2>{vehicle.name}</h2>
                        <img src={vehicle.thumbnail} onClick={() => this.props.onItemClick(vehicle.id)} />
                        <span>{vehicle.price} €</span>
                    </li>)}
                </ul>
            else {
                return <p>No results T_T</p>
            }
        } else {
            return null
        }

    }
}