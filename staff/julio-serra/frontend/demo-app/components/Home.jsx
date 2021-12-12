class Home extends React.Component {
    constructor() {
        super()
        //ponemos el nombre a null
        this.state = {
            name: null,
            city: 'Valencia',
            query: null,
            vehicleId: null,
            view: null
        }
        this.apiKey = '0e3fac04b8c505afea5b016ba076f412'
    }

    componentDidMount() {
        try {
            retrieveUser(this.props.token, (error, user) => {
                if (error)
                    return alert(error.message)

                this.setState({ name: user.name })
            })
        } catch (error) {
            alert(error.message)


        }

    }
    //lo pintamos

    render() {
        if (this.state.name)
            return <div>
                <h1>Hello, {this.state.name ? this.state.name : 'World'}</h1>
                <button onClick={() => {
                    delete sessionStorage.token // borramos la cookie de la contraseña para que vuelva a 0

                    this.props.logOut()    //añadimos el prop creado en la App
                }}>Log Out</button>

                {/* <Forecast apiKey={this.apiKey} city={this.state.city} /> */}

                <Search onQuery={query => this.setState({ query, view: 'results' })} />



                {this.state.view === 'detail' && <Detail
                    itemId={this.state.vehicleId}
                />}

                {/* //si la primera condición es true pasa a la siguiente condicion
                // si es true me pinta un ul, hace un mapeo de todos los vehiculos y me los pinta en un listado */}


                {/* {this.state.query && <Results  //Si hay query le paso a results la query mediante props
                    query={this.state.query}
                    onItemClick={vehicleId => this.setState({ vehicleId })}
                />} */}

                {this.state.view === 'results' && <Results
                    query={this.state.query}
                    onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail' })}
                />}

            </div>

        else return null


    }

}