class App extends React.Component {
    constructor() {
        super()

        this.state = { view: 'login', token: null }
    }
    render() {
        if (this.state.view === 'login')
            return <Login
                onRegisterClick={() => this.setState({ view: 'register' })}
                onLoggedIn={token => this.setState({ view: 'home', token })}
            />

        else if (this.state.view === 'register')
            return <Register onLoginClick={() => this.setState({ view: 'login' })}
                onRegistered={() => this.setState({ view: 'registered' })}
            />

        else if (this.state.view === 'registered')
            return <Registered
                onRegisteredLoginClick={() => this.setState({ view: 'login' })}
            />

        else if (this.state.view === 'home')
            return <Home />
    }
}

