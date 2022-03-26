class App extends React.Component {
    constructor(){
        //logger.debug('App -> constructor')
        super()
        this.state = {
            view: 'login',
            token: null
        }
    }


    render(){
        //logger.debug('App -> render')

        if(this.state.view === 'login')
        return <Login className="panel" 
                onRegisterClick = {()=> this.setState({view: 'register'})} 
                onLoggedIn = {token => this.setState({view : 'home', token})}
                />

        else if (this.state.view === 'register')
        return <Register className="panel" 
                onLoginClick = {()=> this.setState({view:'login'})}
                onRegistered={() => this.setState({ view: 'register-success' })}
                />

        else if (this.state.view === 'register-success')
        return <RegisterSuccess onLoginClick={() => this.setState({ view: 'login' })}/>
        
        else if (this.state.view === 'home')
        return <Home token={this.state.token} />
    }
}