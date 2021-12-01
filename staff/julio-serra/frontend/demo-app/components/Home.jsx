class Home extends React.Component {
    constructor() {
        super()
        //ponemos el nombre a null
        this.state = {
            name: null,
            query: null,
            vehicleId: null,
            vehicles: []
        }
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

                <Search onQuery={query => this.setState({ query, view: 'results'})} />

                {this.state.view === 'results' && <Results 
                    query={this.state.query}
                    onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail'})}
                />}

                {this.state.view === 'detail' && <Detail 
                    itemId={this.state.vehicleId}
                />}
                </div>
            //    if (this.state.vehicles) {
            //        if (this.state.vehicles.length) 
            //            return <ul>
            //         {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
            //             <h2>{vehicle.name}</h2>
            //             <img src={vehicle.thumbnail} />
            //             <span>{vehicle.price} €</span>
            //         </li>)}
            //     </ul>
            // else 
            // return <h1>somos unos fuckers</h1>
            //    } 
 
        else return null
    }

}