const { Component } = React

class App extends Component {
    constructor() {
        logger.debug('App -> constructor')

        super()

        this.state = {
            view: sessionStorage.token ? 'home' : 'login',
            token: sessionStorage.token ? sessionStorage.token : null
        }
    }

    componentWillMount() {
        logger.debug('App -> will mount')
    }

    componentDidMount() {
        logger.debug('App -> did mount')
    }

    componentWillUnmount() {
        logger.debug('App -> will unmount')
    }

    goToRegister = () => this.setState ({ view: 'register'})

    goToHome = token => this.setState({ view: 'home', token })

    goToLogin = () => this.setState({ view: 'login' })

    goToPostregister = () => this.setState({ view: 'postregister' })

    goToModify = () => this.setState({ view: 'modify' })

    goToFavorites = () => this.setState({ view: 'favorites' })

    goToShoppingcart = () => this.setState({ view: 'shoppingcart' })

    logout = () => this.setState({ view: 'login', token: null })

    render() {
        logger.debug('App -> render')

        if (this.state.view === 'login')
            return <Login
                onRegisterClick={this.goToRegister}
                onLoggedIn={this.goToHome}
            />
        else if (this.state.view === 'register')
            return <Register
                onLoginClick={this.goToLogin}
                onRegistered={this.goToPostregister}
            />
        else if (this.state.view === 'postregister')
            return <PostRegister onLoginClick={this.goToHome}
            />
        else if (this.state.view === 'home')
            return <Home
                token={this.state.token}
                onModifyClick={this.goToModify}
                onLoggedOut={this.logout}
                onClickedFav={this.goToFavorites}
                onClickedCart={this.goToShoppingcart}
            />
        else if (this.state.view === 'modify')
            return <ModifyData
                token={this.state.token}
                onModifyed={this.goToHome}
            />
        else if (this.state.view === 'favorites')
            return <Favorites
                onClickedHome={this.goToHome}
            />
        else if (this.state.view === 'shoppingcart')
            return <ShoppingCart
                onClickedHome={this.goToHome}
            />
    }
}
