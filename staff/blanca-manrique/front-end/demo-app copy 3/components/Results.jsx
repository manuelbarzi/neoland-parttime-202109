class Results extends React.Component {
    constructor() {
        logger.debug('Results-> constructor')
        super()
        this.state = { vehicles: null }
    }

    componentDidMount(){
        logger.debug('Results-> component did mount')

        try{
            searchVehicles(this.props.query, (error, vehicles)=>{
                if(error) return alert(error.message)

                this.setState({vehicles})
            })

        }catch(error){
            alert(error.message)
        }
    }

    componentWillReceiveProps(props){
        //Es un método del ciclo de vida de los componentes que sirve para recibir nuevas props. En este caso cada vez que cambie query se va a disparar este método
        logger.debug('Results-> component will receive props')

        try {
            searchVehicles(props.query,(error,vehicles)=>{
                if(error) return alert(error.message)
                this.setState({vehicles})
            })   
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        logger.debug('Results-> render')

        
        if (this.state.vehicles) { //Si existe el array (vehicles distinto de null)
            if (this.state.vehicles.length) //Si hay vehículos(lenght > 0), los pintamos
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <img src={vehicle.thumbnail} onClick={() => this.props.onItemClick(vehicle.id)}/>
                        {fav? 3 :8}
                        <span>{vehicle.price} $</span>
                    </li>)}
                </ul>
            else //Pero si no hay vehículos: No results
                return <p>No results</p>
        } else
            return null

    }
}