class Login extends React.Component{
    constructor(){
        logger.debug('Login -> constructor')
        super()

        this.state = {feedback:null} //estado inicial
    }
    componentWillMount() {
        logger.debug('Login -> will mount')
    }

    componentDidMount() {
        logger.debug('Login -> did mount')
    }

    componentWillUnmount() {
        logger.debug('Login -> will unmount')
    }

    render(){
        logger.debug('Login -> render')
        
        return <div className='login'>
            <h1 className='login__title'>My App</h1>
            <form className='login__form form' onSubmit={event =>{
                event.preventDefault()
                const username = event.target.username.value
                const password = event.target.password.value

                try{
                    authenticateUser(username, password,(error, token) =>{
                        if (error){
                            this.setState({feedback: error.message})

                            return //Para que pare ahí
                        }
                        sessionStorage.token = token

                        this.props.onLoggedIn(token)
                    })
                    //le estoy pasando el username, password y el callback--si va mal me devuelve error:Pero me gustaría settear el feedback dentro del componente de Login, es decir, que el feedback cambie de estado y que me saque por pantalla en algún lugar que algo va mal 
                    //pero si va bien me devuelve el token
                }catch(error){
                    this.setState({feedback: error.message})
                }
                //Si algún campo está mal o está vacío se enviará un error SÍNCRONO que nos muestra el feedback
            }}>
                <input className='form__username input' type="text" name="username" placeholder="username" />
                <input className='form__password input' type="password" name="password" placeholder="password" />
                <button className='form__btn input'>Login</button>

                {this.state.feedback? <p className='form__feedback'>{this.state.feedback}</p> :null // quiero que en caso de que haya feedback (es decir, si hay algún error) me pinte un párrafo con el feedback 
                }
            </form>

            <a className='login__btn' href="" onClick={event =>{
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</a>

        </div>
    }
}
