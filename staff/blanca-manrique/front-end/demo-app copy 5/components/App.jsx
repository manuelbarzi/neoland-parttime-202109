class App extends React.Component {
    constructor() {
        logger.debug('App -> constructor')
        super()

        this.state = { 
            view: sessionStorage.token? 'home' :'login', 
            token: sessionStorage.token? sessionStorage.token :null } //estado inicial
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
                // Ambos callbacks son props que va a recibir Login 
                onRegisterClick={() => this.setState({ view: 'register' })}
                onLoggedIn={token => this.setState({ view: 'home', token })} //Si la propiedad se llama igual que la variable no hace falta hacer token: token
            />

        else if (this.state.view === 'register')
            return <Register
                onLoginClick={() => this.setState({ view: 'login' })}
                onRegisterIn={() => this.setState({ view: 'postregister' })}
            />

        else if (this.state.view === 'postregister')
            return <PostRegister
                onLoginClick={() => this.setState({ view: 'login' })}
            />
        else if (this.state.view === 'home')
            return <Home 
                token={this.state.token}
                onProfileIn ={() => this.setState({view: 'profile'})}
                onLoggedOut={() => this.setState({ view: 'login', token: null })}
            />
    }
}

