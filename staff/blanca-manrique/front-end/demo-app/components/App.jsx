class App extends React.Component {
    constructor() {
        super()

        this.state = { view: 'login', token: null } //estado inicial
    }
    render() {
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
                onPostRegisterClick={() => this.setState({ view: 'login' })}
            />
        else if (this.state.view === 'home')
            return <Home 
                onUserSettingClick = {()=> this.setState({view: 'userSetting'})}
            />
        else if ( this.state.view === 'userSetting')
            return <UserSetting 
                token = {this.state.token}
                CloseSetting ={() => this.setState ({view:'home'})}
            />
    }
}