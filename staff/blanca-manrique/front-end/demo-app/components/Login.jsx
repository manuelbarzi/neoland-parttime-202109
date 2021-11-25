class Login extends React.Component{
    constructor(){
        super()

        this.state = {feedback:null} //estado inicial
    }
    render(){
        return <div>
            <form onSubmit={event =>{
                event.preventDefault()
                const username = event.target.username.value
                const password = event.target.password.value

                try{
                    authenticateUser(username, password,(error, token) =>{
                        if (error){
                            this.setState({feedback: error.message})

                            return //Para que pare ahí
                        }
                        this.props.onLoggedIn(token)
                    })
                    //le estoy pasando el username, password y el callback--si va mal me devuelve error:Pero me gustaría settear el feedback dentro del componente de Login, es decir, que el feedback cambie de estado y que me saque por pantalla en algún lugar que algo va mal 
                    //pero si va bien me devuelve el token
                }catch(error){
                    this.setState({feedback: error.message})
                }
                //Si algún campo está mal o está vacío se enviará un error SÍNCRONO que nos muestra el feedback
            }}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button>Login</button>

                {this.state.feedback? <p>{this.state.feedback}</p> :null // quiero que en caso de que haya feedback (es decir, si hay algún error) me pinte un párrafo con el feedback 
                }
            </form>

            <a href="" onClick={event =>{
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</a>

        </div>
    }
}
