class App extends React.Component {
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

    render() {
        logger.debug('App -> render')

        if (this.state.view === 'login')
            return <Login
                onRegisterClick={() => this.setState({ view: 'register' })}
                onLoggedIn={token => this.setState({ view: 'home', token })}
            />
        else if (this.state.view === 'register')
            return <Register
                onLoginClick={() => this.setState({ view: 'login' })}
                onRegistered={() => this.setState({ view: 'postregister' })}
            />
        else if (this.state.view === 'postregister')
            return <PostRegister onLoginClick={() => this.setState({ view: 'login' })}
            />
        else if (this.state.view === 'home')
            return <Home
                token={this.state.token}
                onModifyClick={() => this.setState({ view: 'modify' })}
                onLoggedOut={() => this.setState({ view: 'login', token: null })}
                onClickedFav={() => this.setState({ view: 'favorites' })}
                onClickedCart={() => this.setState({ view: 'shoppingcart' })}
            />
        else if (this.state.view === 'modify')
            return <ModifyData
                token={this.state.token}
                onModifyed={() => this.setState({ view: 'home' })}
            />
        else if (this.state.view === 'favorites')
            return <Favorites
                onClickedHome={() => this.setState({ view: 'home' })}
            />
        else if (this.state.view === 'shoppingcart')
            return <ShoppingCart
                onClickedHome={() => this.setState({ view: 'home' })}
            />
    }
}
