//EXPLANATION 10 DIC CLASS

class Results extends React.Component {

    constructor() {

        logger.debug('Results --> constructor')

        super()

        this.state = { vehicles: null }
    }

    componentDidMount() { //método de clase del ciclo de vida, se dispara cuando es la primera búsqueda
        logger.debug('Results --> component did mount')

        try {
            searchVehicles(sessionStorage.token, this.props.query, (error, vehicles) => {
                if (error) return alert(error.message) //primero dispara la alerta , leerlo al revés 

                this.setState({ vehicles }) //setea el state de vehicles, results, cuando react setea estado este compo se renderiza de nuevo
            })
        } catch (error) {
            alert(error.message)
        }
    }

    componentWillReceiveProps(props) {  //se monta cuando es la 2da búsqueda en adelante
        logger.debug('Results --> component will recieve props')

        try {
            searchVehicles(sessionStorage.token, props.query, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })
            })
        } catch (error) {
            alert(error.message)

        }
    }

    render() {
        logger.debug('Results --> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>

                        <Fav selected={vehicle.isFav} onClick={() => { //al hacer click vamos a actualizar el estado al buscar el id del vehiculo
                            //en react no se puede modificar objetos en estados, la propiedad de un objeto no se puede modificar

                            try {
                                toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                                    if (error) return alert(error.message)

                                    const update = {}  //las propiedades nuevas de este objeto de isFav se guardar aquí 

                                    for (const key in vehicle)  //para cada propiedad    
                                        update[key] = vehicle[key]  //la misma propiedad de vehicle se pone en el objeto update (una forma de clonar el objeto)

                                    update.isFav = !update.isFav //el negado del update, si es true, que lo ponga false, y al revés (para quitar y poner el corazón)
                            

                                    const vehicles = this.state.vehicles.map(_vehicle => {  //el map itera sobre el array y cada valor lo envía al callabck , el _vehcile es lo que recibes en el iterador del map
                                        if (_vehicle.id === vehicle.id) //comparo con el vehiculo del toggle (el seleccionado)
                                            return update //devuelvo el que tiene la prop isFav

                                        return _vehicle //devuelvo el que esta iterando
                                    })

                                    this.setState({ vehicles }) //setea un array nuevo, que he obtenido del map, menos el que tiene la propiedad cambiada que es el isFav

                                })

                            } catch (error) {
                                alert(error.message)
                            }
                        }} />
                                                        {/* el onClick, tiene un callback, aquí llama a la prop onItemClick (otro cllback que envia home), que envia el id, LINEA 86 */}
                        <img src={vehicle.thumbnail} onClick={() => this.props.onItemClick(vehicle.id)} /> 
                        <span>{vehicle.price} $ </span>

                    </li>)}
                </ul>
            else
                return <p>No Results !!</p>
        } else
            return null
    }
}