class Register extends React.Component {
    constructor() {
        logger.debug('Register -> constructor')
        super()
        this.state = { feedback: null }
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

    submit = event =>{
        event.preventDefault()
        const name = event.target.name.value  
        const username = event.target.username.value  
        const password = event.target.password.value
        const city = event.target.city.value 
        const country = event.target.country.value 
        
        try{
            registerUser(name, username, password, city, country, (error) =>{
                if(error){
                    this.setState({feedback: error.message})

                    return
                }
                this.props.onRegisterIn()
            })

        }catch(error){
            this.setState({feedback: error.message})
        }
    }

    goToLogin = event =>{
        event.preventDefault()
        this.props.onLoginClick()
    }

    render() {
        logger.debug('Register -> render')

        return <div className='register'>
            <h1 className='register__title'>My App</h1>
            <form className='register__form form' onSubmit={this.submit}>
                <input className='form__name input' type="text" name="name" placeholder="name" />
                <input className='form__username input' type="text" name="username" placeholder="username" />
                <input className='form__password input' type="password" name="password" placeholder="password" />
                <input className='form__city input' type="city" name="city" placeholder="city" />
                <input className='form__country input' type="country" name="country" placeholder="country" />
                <button className='form__btn input'>Register</button>

                {this.state.feedback? <p className='form__feedback'>{this.state.feedback}</p> :null}
            </form>

            <a className='register__btn' href="" onClick={this.goToLogin}>Login</a>
        </div>
    }
}
