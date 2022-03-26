class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: sessionStorage.token ? "home" : "land",
      token: sessionStorage.token ? sessionStorage.token : null,
      city: null,
      username: null,
    };
  }
  componentDidMount() {
    logger.debug("APP => componentDidMount");
    try {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) {
          this.setState({ feedback: error.message });
          return;
        }

        this.setState({
          username: user.username,
          city: user.city ? user.city : "this user has no city assigned",
        });
      });
    } catch (error) {
      delete sessionStorage.token;
      this.setState({ feedback: error.message });
    }
  }

  render() {
    return (
      <div>
        <Nav
          loged={this.state.city? true : false}
          handleBack={() =>
            this.setState({ view: sessionStorage.token ? "home" : "land" })
          }
          onClickLogin={(e) => {
            e.preventDefault();

            this.setState({ view: "login" });
          }}
          onLogOut={() => {
            delete sessionStorage.token;
            this.setState({ token: null, view: "land" });
          }}
          showCart={(e)=>{
            e.preventDefault();

            this.setState({ view: "cart" });
          }}
          goHome={(e)=>{
            e.preventDefault();

            this.setState({ view: "home" });
          }}
          goFavourites={(e)=>{
            e.preventDefault();

            this.setState({ view: "favs" });
          }}
          username={this.state.username}
        />

        {this.state.view === "land" ? (
          <Land
            onClickLogin={(e) => {
              e.preventDefault();

              this.setState({ view: "login" });
            }}
            onClickRegister={(e) => {
              e.preventDefault();
              this.setState({ view: "register" });
            }}
          />
        ) : this.state.view === "register" ? (
          <Register
            onClickLogin={(e) => {
              e.preventDefault();
              this.setState({ view: "login" });
            }}
            onRegistered={(_token, _username, _city) =>
              this.setState({
                view: "home",
                token: _token,
                username: _username,
                city: _city,
              })
            }
          />
        ) : this.state.view === "login" ? (
          <Login
            onClickRegister={(e) => {
              e.preventDefault();
              this.setState({ view: "register" });
            }}
            onLoggedIn={(_token, _username, _city) => {
              this.setState({
                view: "home",
                token: _token,
                username: _username,
                city: _city,
              });
            }}
          />
        ) : this.state.view === "home" ? (
          <div className="home-container">
            <Search token={this.state.token} />
            <Forecast city={this.state.city} />
          </div>
        ) : this.state.view === "favs" ? (
          <Favourites />
        ) : this.state.view === "cart" ? (
          <Cart />
        ) :(
          <h3>Something went wrong</h3>
        )}
      </div>
    );
  }
}
