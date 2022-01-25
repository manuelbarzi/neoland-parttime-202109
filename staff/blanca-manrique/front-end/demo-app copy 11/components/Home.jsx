class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')
        super()
        this.state = {
            name: null,
            query: null,
            vehicleId: null,
            view: null,
            city: 'Madrid',
        }
        this.apiKey = 'KT4VXZB23YF5HY2MZA328NVWT'
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

                this.setState({ name: user.name })
            })
        } catch (error) {
            alert(error.message)
            delete sessionStorage.token
            this.props.onLoggedOut()
        }
    }

    componentWillUnmount() {
        logger.debug('Home -> will unmount')
    }

    logout = () => {
        delete sessionStorage.token
        this.props.onLoggedOut()
    }

    goToFavs = () => { this.setState({ view: 'favorites' }) }

    goToCart = () => { this.setState({ view: 'cart' }) }

    goToProfile = () => { this.setState({ view: 'profile' }) }

    showResults = query => this.setState({ query, view: 'results' })

    showDetail = vehicleId => this.setState({ vehicleId, view: 'detail' })

    goBack = () => this.setState({ view: 'results' })

    render() {
        logger.debug('Home -> render')

        if (this.state.name)
            return <div className='home'>
                <h1 className='home__title'>Hello, {this.state.name} !</h1>

                {this.state.city && <Forecast apiKey={this.apiKey} city={this.state.city} />}

                <div className='home__nav'>
                    <button className='btn' onClick={this.logout}>Logout</button>

                    <button className='btn' onClick={this.goToFavs} >Favorites</button>

                    <button className='btn' onClick={this.goToCart}>Cart</button>

                    <button className='btn' onClick={this.goToProfile}>Profile</button>

                </div>

                <Search
                    query={this.state.query}
                    onQueryChange={this.showResults}
                />

                {this.state.view === 'results' && <Results
                    query={this.state.query}
                    onItemClick={this.showDetail}
                />}

                {this.state.view === 'detail' && <Detail
                    itemId={this.state.vehicleId}
                    onReturnClick={this.goBack}
                />}

                {this.state.view === 'favorites' && <Favorites
                    onReturnClick={this.goBack}
                    onItemClick={this.showDetail}
                />}

                {this.state.view === 'cart' && <Cart
                    onReturnClick={this.goBack}
                    onItemClick={this.showDetail}
                />}

                {this.state.view === 'profile' && <Profile 
                    onReturnClick={this.goBack}
                />}

            </div>
        else return null
    }
}