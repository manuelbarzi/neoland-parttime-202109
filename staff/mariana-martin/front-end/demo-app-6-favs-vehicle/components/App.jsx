
class App extends React.Component {
    constructor() {
        logger.debug('App --> constructor')
        super() 

        this.state = { view: sessionStorage.token ? 'home' : 'login', 
        token: sessionStorage.token ? sessionStorage.token : null }
        

        
    }
    componentWillMount(){
        logger.debug('App --> will mount')
    }


    componentDidMount(){
        logger.debug('App --> did mount')
    }

    componentWillUnmount(){
        logger.debug('App --> will unmount')
    }

    render() { 
        
        
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
            return <Home 
                 token={this.state.token} 
                 onLoggedOut = {() => this.setState({view: 'login', token: null})}   //dispara el callback llamado onLoggedOut, cuando la llama en Home línea 76
                 onClicked={()=> this.setState({view:'changeuser' })}
                 onClickedFav={()=> this.setState({view: 'favsvehicles'})}
           />
        
     

            else if (this.state.view === 'changeuser')
           return <ChangeUser 
                 token={this.state.token}
                 onModify={()=> this.setState({view:'login'})}
                 goBack={()=> this.setState({view: 'home'})}
           />

           else if (this.state.view === 'favsvehicles')
           return <FavsVehicles
                onClickedFavHome={()=> this.setState({view: 'home'})}
           />


        //////agregue yo esto:
        else if (this.state.view === 'unregister')
        return <Unregister token={this.state.token}
        onLoginClick={() => this.setState({view: 'login'})} 
        />
        ////////

        }
}