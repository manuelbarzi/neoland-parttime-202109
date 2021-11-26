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
            return <Register 
            onLoginClick={() => this.setState({ view: 'login' })} 
            onRegistered={() => this.setState({ view: 'PostRegister'}) }
            
            />
        
        else if (this.state.view === 'home')
            return <Home token={this.state.token} />

         else if (this.state.view === 'PostRegister')
         return <PostRegister onLoginClick={() => this.setState({ view: 'login' })} />
    }
  
}