class Carrito extends React.Component {
    constructor() {
        super()
        this.state = { chart: null,total:null}
    }

    componentDidMount() {
        try {
            retrieveChartVehicles(sessionStorage.token, (error, vehicles, total) => {
                if (error) {
                    return alert(error.message)
                }
                const chart = vehicles
                this.setState({ chart, total })

            }
            )
        }
        catch (error) {
            alert(error.message)
        }
    }
    render() {

        if (this.state.chart) {
            const total=0
            return <div>
                <h2>Chart</h2>
                <ul>
                    {this.state.chart.map(vehicle =><li key={vehicle.id}>
                        
                        <h1>{vehicle.name}</h1>
                        <Chart select={vehicle.inChart} onClickc={() => {
                            try {
                                toggleChartVehicle(sessionStorage.token, vehicle.id, error => {

                                    if (error) return alert(error.message)
                                   
                                    const update = {}

                                    for (const key in vehicle)
                                        update[key] = vehicle[key]

                                    update.inChart = !update.inChart

                                    const vehicles = this.state.vehicles.map(_vehicle => {

                                        if (_vehicle.id === vehicle.id)
                                            return update

                                        return _vehicle
                                    })

                                    this.setState({ vehicles: vehicles })

                                })
                            } catch (error) {
                                alert(error.message)
                            }
                        }} />
                        <img src={vehicle.image} />
                        <span>{vehicle.price} $</span>

                    </li>)}
            
                </ul>
            <h2>{this.state.total}</h2>
            </div>

        } else
            return null

    }
}
