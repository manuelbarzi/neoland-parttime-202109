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

    submit = event =>{
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
 
        }catch(error){
            this.setState({feedback: error.message})
        }
        
    }

    goToRegister = event =>{
        event.preventDefault()
        this.props.onRegisterClick()
    }

    render(){
        logger.debug('Login -> render')
        
        return <div className='login'>
            <h1 className='login__title'>My App</h1>
            <form className='login__form form' onSubmit={this.submit}>
                <input className='form__username input' type="text" name="username" placeholder="username" />
                <input className='form__password input' type="password" name="password" placeholder="password" />
                <button className='form__btn input'>Login</button>

                {this.state.feedback? <p className='form__feedback'>{this.state.feedback}</p> :null }
            </form>

            <a className='login__btn' href="" onClick={this.goToRegister}>Register</a>

        </div>
    }
}
