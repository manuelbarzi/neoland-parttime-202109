class Detail extends React.Component {
    constructor() {
        super()

        this.state = {
            feedback: null,
            vehicles: []
        }

    }

    render() {
            try {
                searchVehicles(this.props.id, (error, vehicles) => {
                    if (error) return alert(error.menssage)

                    this.setState({vehicles})

                })
            } catch (error) {
                alert(error.menssage)
            }
        return <div>
            {
                !!this.state.vehicles.length && <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>

                        <img src={vehicle.thumbnail} />
                        <span>{vehicle.price} $</span>

                    </li>)}
                </ul>

            }
        </div>
    }


}