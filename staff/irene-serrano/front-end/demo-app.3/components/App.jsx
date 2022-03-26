class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view:  sessionStorage.token ? 'home' : 'login',
      token: sessionStorage.token ? sessionStorage.token : null
    };
  }
 
  render() {
    return (
      <div>
        <Forecast  />

      {
      this.state.view === 'login' ? 
        <Login 
          onRegisterClick={()=> {
            this.setState({view:'register'})
          }}
          onLoggedIn={token => this.setState({ view: 'home', token })}/> : 
      this.state.view === 'register' ?
        <Register 
          onRegistered={()=> this.setState({view: 'home'})}
          onLoginClick={()=> this.setState({view: 'login'})} /> : 
      this.state.view === 'home' || this.state.view === 'results' || this.state.view === 'detail' ?
        <Home token={this.state.token}  onLoggedOut={()=> this.setState({view:login, token: null})}/> :
        null
      }
        <Search className="flex-list" onQuery={query => this.setState({ query, view: 'results'})} />

            {this.state.view === 'results' && <Results query={this.state.query} onItemClick={vehicle => this.setState({vehicleId, view: 'detail '})}/> }

            {this.state.view === 'detail' && <Detail itemId={this.state.vehicleId} />}
      </div>
    )
    
    
  }
}
