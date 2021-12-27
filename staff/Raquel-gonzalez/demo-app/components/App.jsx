//Se utiliza class cuando se pueden cambiar vistas, siempre tiene un constructor y un super
class App extends React.Component {
    constructor() {
        logger.debug('App -> constructor')

        super()
//this.state para indicar las vistas
        this.state = {
            view: sessionStorage.token ? 'home' : 'login',
            token: sessionStorage.token ? sessionStorage.token : null
        }
    }
//cuando montas render
    componentWillMount() {
        logger.debug('App -> will mount')
    }
//Despues de montar render
    componentDidMount() {
        logger.debug('App -> did mount')
    }
//Para desmontar
    componentWillUnmount() {
        logger.debug('App -> will unmount')
    }
//render es = a pintame 
    render() {
        logger.debug('App -> render')
//setState para cambiar la vista en este caso (linea 31) a register
        if (this.state.view === 'login')
            return <Login
                onRegisterClick={() => this.setState({ view: 'register' })}
                onLoggedIn={token => this.setState({ view: 'home', token })}
            />
        else if (this.state.view === 'register')
            return <Register
                onLoginClick={() => this.setState({ view: 'login' })}
                onRegistered={() => this.setState({ view: 'register-success' })}
            />
        else if (this.state.view === 'register-success')
            return <RegisterSuccess onLoginClick={() => this.setState({ view: 'login' })} />
        else if (this.state.view === 'home')
            return <Home token={this.state.token} onLoggedOut={() => this.setState({ view: 'login', token: null })} />
    }
}