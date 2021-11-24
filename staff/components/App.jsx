class App extends React.Component{
    constructor(){
        super()

        this.state = {view: 'login', token: null}
    }


    render() {

        if(this.state.view === 'login')
            return <Login 
                OnRegisterClick={()=> this.setState({ view: 'Register'})}
                OnLoggedIn ={token => this.setState( {view: 'home', token})}
                />
        else if (this.state.view === 'register')
            return <Register onLoginClick={() => this.setState({view:'login'})}        />
        else if (this.state.view === 'home')
            return <Home/>
            
    } 
}
