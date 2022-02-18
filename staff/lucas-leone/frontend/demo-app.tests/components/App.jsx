class App extends React.Component {
    constructor() {
        logger.debug('App -> constructor') 
        super()

        this.state = { view: sessionStorage.token ? 'home' : "login", token: sessionStorage.token? sessionStorage.token : null, username: null,id: 'FYG51' } //estado inicial
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
                    onLoggedOut={()=> this.setState({view:'login'})}
                    onClickedDetail={id => {this.setState({view:'detail',id:id.id}), console.log(id.id)}}
                    
            />
        else if (this.state.view === 'changeuser')
            return <ChangeUser token={this.state.token}
            onModifyed={()=> this.setState({view:'login'})}
            />
        // else if (this.state.view === 'detail')
        // return <Detail id={this.state.id} />        
    }
}