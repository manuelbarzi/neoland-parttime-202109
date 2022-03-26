class App extends React.Component {
  constructor() {
    super();
    this.state = {
      /* view:  sessionStorage.token ? 'home' : 'login', */
      view: null,
      token: sessionStorage.token ? sessionStorage.token : null
    };
  }
 
  render() {
    return (
      <div>
        <Forecast  />
        <Search className="flex-list" onQuery={query => this.setState({ query, view: 'results'})} />

            {this.state.view === 'results' && <Results query={this.state.query} onItemClick={vehicle => this.setState({vehicleId, view: 'detail '})}/> }

            {this.state.view === 'detail' && <Detail itemId={this.state.vehicleId} />}
      </div>
    )
    
    if (this.state.view === 'login') {
      return <Login 
        onRegisterClick={()=> {
          this.setState({view:'register'})
        }}
          onLoggedIn={token => this.setState({ view: 'home', token })}
        />
    } else if (this.state.view === 'register') {
      return <Register 
      onRegistered={()=> this.setState({view: 'home'})}
      onLoginClick={()=> this.setState({view: 'login'})
      } />
    }else if (this.state.view === 'reggister-succes') {
      return <RegisterSuccess onLoginClick={
        ()=> this.setState({ view: 'login'})
      } />;
    }else if (this.state.view === 'home') {
      return <Home token={this.state.token}  onLoggedOut={()=> this.setState({view:login, token})}/>;
    }
  }
}
