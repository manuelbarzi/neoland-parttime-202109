class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback: null,
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={e=>{
          e.preventDefault()
          const name= e.target.name.value
          const username = e.target.username.value
          const password = e.target.password.value

          try{
            registerUser(user, username, password, error => {
              if(error){
                this.setState({feedback: error.message})
                return
              }
              this.props.onRegistered()
            })
          } catch (error){
            this.setState({feedback:error.messsage})
          }

        }}>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button>Register</button>

          {this.state.feedback ? <p>{this.state.feedback}</p> :null}
        </form>

        <a href="" onClick={e=>{
        e.preventDefault()
        this.props.onLoginClick()}}>Login</a>
      </div>
    );
  }
}
