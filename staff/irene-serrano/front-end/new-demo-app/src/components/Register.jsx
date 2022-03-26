import { Component } from 'react'

import registerUser from '../logic/register-user'
import authenticateUser from '../logic/authenticate-user'
import retrieveUser from '../logic/retrieve-user'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      feedback: null,
    }
  }

  submit = event => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const city = event.target.city.value;
    const password = event.target.password.value;

    try {
      registerUser( username, email, city, password)
        .then(()=>{
          authenticateUser(username, password)
            .then((token)=>{
              sessionStorage.token = token
              console.log(sessionStorage.token)
              //retrieveUser(sessionStorage.token)
              this.props.onRegistered(sessionStorage.token, username, city)
            })
        })            
           
       } catch (error) {
      this.setState({ feedback: error.message })
    }
  
    /* try {
      registerUser(username, email, city, password, error => {
        if (error) {
          this.setState({ feedback: error.message })
          return
        }else{
          authenticateUser(username,password, (error, token)=>{
            if(error){
              return console.error('error autenticando al usuario')
            }else{
          
              sessionStorage.token = token
              retrieveUser(token, (error, user)=>{
                if(error){
                    this.setState({feedback: error.message})
                    return
                }
                var city = user.city;
                this.props.onRegistered(sessionStorage.token, username, city)
              })
            }
            
          })
          
        }
      })
    } catch (error) {
      this.setState({ feedback: error.message })
    }
   */
  
  
  }

  render() {
    return <div className="register-container panel">
        <h2>Register</h2>
        <form
          className="register-form form-container"
          onSubmit={this.submit}>

          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="text" name="city" placeholder="City" />
          <input type="password" name="password" placeholder="Password" />
          
          <button className="btn-full">Submit</button>
          
          <p>
            Already have an account? Please, 
            <span className="link selectable" onClick={this.props.onClickLogin}> log in</span>
            .
          </p>

          {this.state.feedback ? (
            <p className="message-error">{this.state.feedback}</p>
          ) : null}
        </form>
      </div>
  }
}
export default Register