class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback: null,
    };
  }
 
  render() {
    return (
      <div className="panel">
          <h2>Register</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const username = e.target.username.value;
            const email = e.target.email.value;
            const password = e.target.password.value;

            try {
              registerUser(email, username, password, (error) => {
                if (error) {
                  this.setState({ feedback: error.message });
                  return;
                }
                this.props.onRegistered()
              });
            } catch (error) {
              this.setState({ feedback: error.message });
            }
          }}
        >
          <input type="email" name="email" placeholder="email" />
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button>Submit</button>

          {this.state.feedback ? <p className="error">{this.state.feedback}</p> : null}

          <p>You already have an account? Please <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              this.props.onLoginClick();
            }}
          > sign in</a>.</p>
          
        </form>
      </div>
    );
  }
}
