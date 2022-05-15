import { Component } from "react";
import registerUser from "../logic/register-user";

class Register extends Component {
  constructor() {
    super();

    this.state = { feedback: null };
  }

  register = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      registerUser(name, username, password)
        .then(() => this.props.onRegistered())
        .catch((error) => this.setState({ feedback: error.message }));
      // (error) => {
      //   if (error) {
      //     this.setState({ feedback: error.message });

      //     return;
      //   }

      //   this.props.onRegistered();
      // });
    } catch (error) {
      this.setState({ feedback: error.message });
    }
  };
  goToLogin = (event) => {
    event.preventDefault();

  };
  goLogin = event => {
    event.preventDefault();
    this.props.onLoginClick();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.register}>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button>Register</button>
          {this.state.feedback ? <p>{this.state.feedback}</p> : null}
        </form>

        <a href="" onClick={this.goLogin} >
          Login
        </a>
      </div>
    );
  }
}

export default Register;