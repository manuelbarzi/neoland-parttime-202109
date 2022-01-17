class Detail extends React.Component {
    constructor(){
        logger.debug('Detail --> constructor')

        super()

        this.state = { vehicle: null} //a este se le cambiara el corazón
    }

    componentDidMount(){
        logger.debug('Detail --> component did mount')

        try {
            retrieveVehicle(sessionStorage.token, this.props.itemId, (error, vehicle) => {
                if(error) return alert(error.message)  //early return

                this.setState({ vehicle })
            })
        } catch (error) {
            alert(error.message)
        }
    }

        render(){
            logger.debug('Detail --> render')

            if(this.state.vehicle)
            return <div>
                <h2>{this.state.vehicle.name}</h2>

                <Fav selected={this.state.vehicle.isFav} onClick={() => { //al hacer click vamos a actualizar el estado al buscar el id del vehiculo
                            //en react no se puede modificar objetos en estados, la propiedad de un objeto no se puede modificar

                            try {
                                toggleFavVehicle(sessionStorage.token, this.state.vehicle.id, error => {
                                    if (error) return alert(error.message)

                                    const update = {}  //las propiedades nuevas de este objeto de isFav se guardar aquí 

                                    for (const key in this.state.vehicle)  //para cada propiedad ahora del state   
                                        update[key] = this.state.vehicle[key]  //la misma propiedad de vehicle se pone en el objeto update (una forma de clonar el objeto)

                                    update.isFav = !update.isFav 
                                                   
                                    this.setState({ vehicle: update }) 

                                })

                            } catch (error) {
                                alert(error.message)
                            }
                        }} />
                <img src={this.state.vehicle.image} />
                <p>{this.state.vehicle.description}</p>
                <p>{this.state.vehicle.price}</p>
                <p>{this.state.vehicle.color}</p>
                <p>{this.state.vehicle.style}</p>
                <p>{this.state.vehicle.year}</p>
                <a href={this.state.vehicle.url}> Original Item</a>
            </div>

            else
            return null
        }
}