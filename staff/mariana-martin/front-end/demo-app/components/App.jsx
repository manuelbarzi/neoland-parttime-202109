//compo general de clase, maneja las vistas, que nos permite apagar y prender vistas

class App extends React.Component {
    constructor() {
        logger.debug('App --> constructor')
        super() //con super invocas al constructor o a la clase

        this.state = { view: 'login', token: null }
        
    }

    render() { //el render devuelve lo que hay que pintar, el return decide que pintar:
        
        //ternario: pero podemos usar IF como abajo:
        // return this.state.view === 'login'?
        // <login/>
        // :
        // null

        logger.debug('App --> render')

        if (this.state.view === 'login')
            return <Login
                onRegisterClick={() => this.setState({ view: 'register' })}  //se genera una props, que es onRegisterClick , envío un callback que cambiara el view state
                onLoggedIn={token => this.setState({ view: 'home', token })}  //si se ha hecho bien el authenticate, irá a la home
            />                                                      //token:token

        else if (this.state.view === 'register')
            return <Register 
                onLoginClick={() => this.setState({ view: 'login' })}
                onRegistered={() => this.setState({ view: 'register-success'})} //vista de confirmación
             />

        else if (this.state.view === 'register-success')
             return <RegisterSuccess 
                onLoginClick={() => this.setState({view: 'login'})} 
            />

        else if (this.state.view === 'home')
            return <Home token={this.state.token} />  //pasar como prop el token, para que home lo reciba y llame  ala lógica de recuperar usuario, retrieve
    }
}