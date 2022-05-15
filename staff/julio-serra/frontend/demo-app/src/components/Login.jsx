import { useState } from "react";
import authenticateUser from '../logic/authenticate-user'

function Login({ onLoggedIn, onRegisterClick }) {
  const [feedback, setFeedback] = useState(null);

  const login = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      authenticateUser(username, password, (error, token) => {
        if (error) {
          setFeedback(error.message)

          return;
        }
        sessionStorage.token = token; // guardo el token
        onLoggedIn(token); //le decimos a la App si hay algún cambio en el token
      });
    } catch (error) {
      setFeedback(error.message)
    }
  };

  const GoRegister = event => {
    event.preventDefault();
    onRegisterClick();
  };


  return <div>
      <form className="form" onSubmit={login}>
        <input
          className="form__input"
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          className="form__input"
          type="password"
          name="password"
          placeholder="password"
        />
  
        <button>Login</button>
  
        {feedback ? <p>{feedback}</p> : null}
      </form>
  
      <a href="" onClick={GoRegister}>
        Register
      </a>
    </div>



}


export default Login