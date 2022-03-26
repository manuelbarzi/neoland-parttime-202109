class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            feebdack : null
        }
    }

    render(){
        return <div className="login-container panel">
            <h2>Login</h2>
            <form className="login-form form-container" onSubmit={event => {
                event.preventDefault()

                const password = event.target.password.value;
                const username = event.target.username.value;

                try{
                    authenticateUser(username, password, (error, token) => {
                        if(error){
                            this.setState({feedback: error.message})
                            return
                        }
                        sessionStorage.token = token
                        retrieveUser(token, (error, user)=>{
                            if(error){
                                this.setState({feedback: error.message})
                                return
                            }
            
                            var city = user.city;
                            this.props.onLoggedIn(token, username, city);
                        
                        })
                        
                    })
                }catch (error) {
                    this.setState({ feedback: error.message });
                  }
            }}>
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>

                <button className="btn-full">Submit</button>

                <p>Don't have an account? Please, <span className="link selectable" onClick={this.props.onClickRegister}>register</span>.</p>
                
                {this.state.feedback ? (
                <p className="message-error">{this.state.feedback}</p>
                ) : null}
            </form>
            

        </div>
    }
}