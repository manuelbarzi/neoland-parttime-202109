

class Home extends React.Component {
    constructor() {

        logger.debug('Home --> constructor')

        super()

        this.state = {
            name: null,
            city: null,
            query: null,
            vehicles: null,
            view: null
        }

        this.apiKey = 'K5P9HDPKFJ53G43DH7RXU5V6N'
    }

    componentWillMount() {
        logger.debug('Home --> will mount')
    }

  
    componentDidMount() {  //método cuando ya se ha montado el componente en el DOM virtual, aparece después de pintar la 1era vez

        logger.debug('Home --> did mount')

        try {
            retrieveUser(this.props.token, (error, user) => {
                if (error) {
                    alert(error.message)
                    delete sessionStorage.token

                    this.props.onLoggedOut() //cuando me borre el token, llamo al callback de onLoggedOut (aunque no sea boton)

                    return
                }

                this.setState({ name: user.name, city: user.city})
            })
        } catch (error) {
            alert(error.message)
            delete sessionStorage.token  //error sincrono, al catch, no llamo a la api, hubo un error antes de y :

            this.props.onLoggedOut() //llamo al callback onLoggedOut, para salir de ahí e ir a Login que es lo que indica este callabck,porque si no me dejaría la página en blanco
        }
    }

    componentWillUnmount() {
        logger.debug('Home --> will unmount')
    }

    render() {                  //este if, para que no muestre la palabra "world" antes del nombre

        logger.debug('Home --> render')

        if (this.state.name) {
            return <div>
                <h1>Hello, { this.state.name }!</h1>


                <button onClick={event => {
                    event.preventDefault()
                    this.props.onClickedCart()
                }}>Shopping Cart</button>

                <button onClick={event => {
                    event.preventDefault()
                    this.props.onClickedFav()
                }}>Favorites</button>

                <button onClick={event => {
                    event.preventDefault()
                    this.props.onClicked()
                }}>Change User</button>


                <button onClick={() => {
                    delete sessionStorage.token
                    this.props.onLoggedOut()
                }} > Logout </button>

    



               {this.state.city && <Forecast apiKey={this.apiKey} city={this.state.city} />}


                <Search onQuery={query => this.setState({ query, view: 'results' })} />
                                 {/* //si la propiedad view del state del compo es igual a results */}
                {this.state.view === 'results' && <Results
                    query={this.state.query}
                    onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail' })} //vehicleId recibe el id de results y lo setearlo en state de home, LÍNEA 83 (DE RESULTS)
                />}             

                

                {this.state.view === 'detail' && <Detail itemId={this.state.vehicleId} //recibirá un id para cuando carga el compo llamar a la api, pedirle el dettale y pintanrlo
                />}

                {this.state.view === 'favsvehicles' && <Favs onItemClik={vehicleId => this.setState({ vehicleId, view: 'detail'})} />}
            


            </div>

        } else return null
        
    }
}



