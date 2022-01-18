class Register extends React.Component {
    constructor() {
        logger.debug('Register -> constructor')
        super()

        this.state = { feedback: null } //estado inicial
    }
    componentWillMount() {
        logger.debug('Register -> will mount')
    }

    componentDidMount() {
        logger.debug('Register -> did mount')
    }

    componentWillUnmount() {
        logger.debug('Register -> will unmount')
    }
    render() {
        logger.debug('Register -> render')
        return <div className='register'>
            <h1 className='register__title'>My App</h1>
            <form className='register__form form' onSubmit ={event =>{
                event.preventDefault()
                const name = event.target.name.value  
                const username = event.target.username.value  
                const password = event.target.password.value
                
                try{
                    registerUser(name, username, password,(error) =>{
                        if(error){
                            this.setState({feedback: error.message})

                            return
                        }
                        this.props.onRegisterIn(null)
                    }
                    )

                }catch(error){
                    this.setState({feedback: error.message})
                }
            }}>
                <input className='form__name input' type="text" name="name" placeholder="name" />
                <input className='form__username input' type="text" name="username" placeholder="username" />
                <input className='form__password input' type="password" name="password" placeholder="password" />
                <button className='form__btn input'>Register</button>

                {this.state.feedback? <p className='form__feedback'>{this.state.feedback}</p> :null // quiero que en caso de que haya feedback (es decir, si hay algún error) me pinte un párrafo con el feedback 
                }
            </form>

            <a className='register__btn' href="" onClick={event =>{
                event.preventDefault()

                this.props.onLoginClick()
            }}>Login</a>
        </div>
    }
}
