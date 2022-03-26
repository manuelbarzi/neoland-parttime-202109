import { useState } from "react";
import authenticateUser from "../logic/authenticate-user";
import retrieveUser from "../logic/retrieve-user";
//import retrieveUser from "../logic/retrieve-user";

function Login({ onClickRegister, onLoggedIn }) {
  const [feedback, setFeedback] = useState(null);
  //const [user, setUser] = useState(null);

  const submit = (event) => {
    event.preventDefault();

    const password = event.target.password.value;
    const username = event.target.username.value;

    try {
      authenticateUser(username, password)
        .then((token) => {
          sessionStorage.token = token;
          retrieveUser(token)
            .then((user) => {
             // setUser(user);
              var city = user.city;
              onLoggedIn(token, username, city);
            })
            .catch((error) => setFeedback(error.message));
        })
        .catch((error) => setFeedback(error.message));
    } catch (error) {
      setFeedback(error.message);
    }
  };


  return (
    <div className="login-container panel">
      <h2>Login</h2>
      <form className="login-form form-container" onSubmit={submit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />

        <button className="btn-full">Submit</button>

        <p>
          Don't have an account? Please,{" "}
          <span className="link selectable" onClick={onClickRegister}>
            register
          </span>
          .
        </p>

        {feedback ? <p className="message-error">{feedback}</p> : null}
      </form>
    </div>
  );
}

export default Login;
