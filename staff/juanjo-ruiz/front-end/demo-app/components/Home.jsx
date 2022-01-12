class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = {
            name: null,
            query: null,
            vehicleId: null,
            view: null,
            city: null
        }

        this.apiKey = '73KP3CVXGQF33DT6QHF9JVD7B'

    }

    componentWillMount() {
        logger.debug('Home -> will mount')
    }

    componentDidMount() {
        logger.debug('Home -> did mount')

        try {
            retrieveUser(this.props.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    delete sessionStorage.token

                    this.props.onLoggedOut()

                    return
                }

                this.setState({ name: user.name, city: user.city })
            })
        } catch (error) {
            alert(error.message)

            delete sessionStorage.token

            this.props.onLoggedOut()
        }
    }

    componentWillUnmount() {
        logger.debug('Home -> component will unmount')
    }

    render() {
        logger.debug('Home -> render')

        if (this.state.name) {
            return <div>
                <h1>Hola, {this.state.name} !</h1>
                <button className="button" onClick={event => {
                    event.preventDefault()

                    this.props.onModifyClick()
                }}>Modificar datos</button>

                <button className="button" onClick={() => {
                    delete sessionStorage.token

                    this.props.onLoggedOut()
                }}>Cierra sesión</button>


                <button className="button" onClick={event => {
                    event.preventDefault()

                    this.props.onClickedFav()
                }}>Favoritos</button>

                <button className="button" onClick={event => {
                    event.preventDefault()

                    this.props.onClickedCart()
                }}>Cesta</button>

                <Forecast apiKey={this.apiKey} city={this.state.city} />

                <Search
                    query={this.state.query}
                    onQuery={query => this.setState({ query, view: 'results' })}
                />

                {this.state.view === 'results' && <Results
                    query={this.state.query}
                    onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail' })}
                />}

                {this.state.view === 'detail' && <Detail itemId={this.state.vehicleId} />}
            </div>
        } else
            return null
    }
}