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

  goBack = () =>
    this.setState({ view: sessionStorage.token ? "home" : "land" });

  goLogin = (e) => {
    e.preventDefault();

    this.setState({ view: "login" });
  };
  goHome = (e) => {
    e.preventDefault();

    this.setState({ view: "home" });
  };
  goFavorites = (e) => {
    e.preventDefault();

    this.setState({ view: "favs" });
  };
  goRegister = (e) => {
    e.preventDefault();
    this.setState({ view: "register" });
  };

  logout = () => {
    delete sessionStorage.token;
    this.setState({ token: null, view: "land", city: null });
  };
  showCart = (e) => {
    e.preventDefault();

    this.setState({ view: "cart" });
  };

  setRegister = (_token, _username, _city) =>
    this.setState({
      view: "home",
      token: _token,
      username: _username,
      city: _city,
    });

  setLogin = (_token, _username, _city) => {
    this.setState({
      view: "home",
      token: _token,
      username: _username,
      city: _city,
    });
  };

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
          loged={this.state.city ? true : false}
          handleBack={this.goBack}
          onClickLogin={this.goLogin}
          onLogOut={this.logout}
          showCart={this.showCart}
          goHome={this.goHome}
          goFavorites={this.goFavorites}
          username={this.state.username}
        />

        {this.state.view === "land" ? (
          <Land onClickLogin={this.goLogin} onClickRegister={this.goRegister} />
        ) : this.state.view === "register" ? (
          <Register
            onClickLogin={this.goLogin}
            onRegistered={this.setRegister}
          />
        ) : this.state.view === "login" ? (
          <Login onClickRegister={this.goRegister} onLoggedIn={this.setLogin} />
        ) : this.state.view === "home" ? (
          <div className="home-container">
            <Search token={this.state.token} />
            <Forecast city={this.state.city} />
          </div>
        ) : this.state.view === "favs" ? (
          <Favorites />
        ) : this.state.view === "cart" ? (
          <Cart />
        ) : (
          <h3>Something went wrong</h3>
        )}
      </div>
    );
  }
}
