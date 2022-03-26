class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback: null,
    };
  }

  render() {
    return (
      <div className="panel">
        <h2>Login</h2>
        <form
          onSubmit={event => {
            event.preventDefault();
            const username = event.target.username.value;
            const password = event.target.password.value;

            try {
              authenticateUser(username, password, (error, token) => {
                if (error) {
                  this.setState({ feedback: error.message });
                  return;
                }
                this.props.onLoggedIn(token);
                sessionStorage.token = token
              });
            } catch (error) {
              this.setState({ feedback: error.message });
            }
          }}
        >
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button>Submit</button>

          {this.state.feedback ? <p className="error">{this.state.feedback}</p> : null}
        </form>

        <p >Don't have an account yet? Please 
        <a 
          href=""
          onClick={e => {
            e.preventDefault();
            this.props.onRegisterClick();
          }}
        > register</a> </p>
      </div>
    );
  }
}
