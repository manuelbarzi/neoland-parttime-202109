class App extends React.Component {
    constructor() {
        super()

        this.state = { view: 'login', token: null, username: null } //estado inicial
    }
    render() {
        if (this.state.view === 'login')
            return <Login
               
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
                onPostRegisterClick={() => this.setState({ view: 'login' })}
            />
        else if (this.state.view === 'home')
            return <Home token={this.state.token}
                    onClicked={()=> this.setState({view:'changeuser' })} 
            />
        else if (this.state.view === 'changeuser')
            return <ChangeUser token={this.state.token}
            onModifyed={()=> this.setState({view:'login'})}
            />
    }
}