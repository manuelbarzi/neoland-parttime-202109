const { Component } = React

class Home extends Component {
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

    showModifyData = event => {
        event.preventDefault()

        this.props.onModifyClick()
    }

    showFavorites = event => {
        event.preventDefault()

        this.props.onClickedFav()
    }

    showCart = event => {
        event.preventDefault()

        this.props.onClickedCart()
    }

    showResults = query => this.setState({ query, view: 'results' })

    showDetail = vehicleId => this.setState({ vehicleId, view: 'detail' })

    logout = () => {
        delete sessionStorage.token

        this.props.onLoggedOut()
    }


    render() {
        logger.debug('Home -> render')

        if (this.state.name) {
            return <div>
                <h1>Hola, {this.state.name} !</h1>
                <button className="button" onClick={this.showModifyData}>Modificar datos</button>

                <button className="button" onClick={this.logout}>Cierra sesión</button>


                <button className="button" onClick={this.showFavorites}>Favoritos</button>

                <button className="button" onClick={this.showCart}>Cesta</button>

                <Forecast apiKey={this.apiKey} city={this.state.city} />

                <Search
                    query={this.state.query}
                    onQuery={this.showResults}
                />

                {this.state.view === 'results' && <Results
                    query={this.state.query}
                    onItemClick={this.showDetail}
                />}

                {this.state.view === 'detail' && <Detail itemId={this.state.vehicleId} />}
            </div>
        } else
            return null
    }
}