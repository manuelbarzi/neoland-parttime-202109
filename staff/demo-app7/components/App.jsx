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

    goToRegister = () => this.setState({ view: 'register' })

    goToHome = token => this.setState({ view: 'home', token })

    goToLogin = () => this.setState({ view: 'login' })

    goToRegisterSuccess = () => this.setState({ view: 'register-success' })

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
                onRegistered={this.goToRegisterSuccess}
            />
        else if (this.state.view === 'register-success')
            return <RegisterSuccess onLoginClick={this.goToLogin} />
        else if (this.state.view === 'home')
            return <Home token={this.state.token} onLoggedOut={this.logout} />
    }
}