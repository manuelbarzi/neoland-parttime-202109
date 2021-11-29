class App extends React.Component {
    constructor() {
        super()

        // cuando arranca la APp muestra:
        this.state = {
            view: sessionStorage.token ? 'home' : 'login', // si hay token muestra la pagina home y sino login

            token: sessionStorage.token ? sessionStorage.token : null // si hay token me lo guardas en token y sino null
        }
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
                onRegistered={() => this.setState({ view: 'PostRegister' })}
            />

        else if (this.state.view === 'PostRegister')
            return <PostRegister
                onLoginClick={() => this.setState({ view: 'login' })} />

        else if (this.state.view === 'home')
            return <Home token={this.state.token}
                logOut={() => {
                    this.setState({ view: 'login' })
                }}    //creamos el callback para que llame al componente Home
            />


    }

}