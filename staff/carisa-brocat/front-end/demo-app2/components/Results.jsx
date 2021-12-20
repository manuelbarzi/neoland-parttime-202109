class Results extends React.Component {
    constructor() {
        logger.debug('Results -> constructor')

        super()

        this.state = {
            vehicles: null,
            feedback: null
        }
    }

    componentDidMount() {
        logger.debug('Results -> component did mount')

        try {
            searchVehicles(this.props.query, (error, vehicles) => {
                if (error) {
                    return this.setState({ feedback: error.message })
                }
                else {
                    this.setState({ vehicles })
                }
            })

        } catch (error) {
            this.setState({ feedback: error.message })
        }

    }

    componentWillReceiveProps(props) {
        logger.debug('Results -> component will receive props')

        try {
            searchVehicles(props.query, (error, vehicles) => {
                if (error) {
                    return this.setState({ feedback: error.message })
                }
                else {
                    this.setState({ vehicles })
                }
            })

        } catch (error) {
            this.setState({ feedback: error.message })
        }
    }

    render() {
        logger.debug('Results -> render')
        
        { this.state.feedback ? <p>{this.state.feedback}</p> : null }

        if (this.state.vehicles) {
            if (this.state.vehicles.length) {
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <img src={vehicle.thumbnail} onClick={() => this.props.onItemClick(vehicle.id)} />
                        <span>{vehicle.price} $</span>
                    </li>)}
                </ul>
            }
            else {
                return <p>No results :(</p>
            }
        }
        else {
            return null
        }    
    }
}