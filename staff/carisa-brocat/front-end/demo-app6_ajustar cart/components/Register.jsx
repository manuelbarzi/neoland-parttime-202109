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

    submit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const city = event.target.city.value
        const country = event.target.country.value
        const password = event.target.password.value

        try {
            registerUser(name, username, city, country, password, error => {
                if (error) {
                    this.setState({ feedback: error.message })
                    return
                }
                this.props.onRegistered()
            })
        }
        catch (error) {
            this.setState({ feedback: error.message })
        }

    }

    goToLogin = event => {
        event.preventDefault()

        this.props.onLoginClick()
    }

    render() {
        logger.debug('Register -> render')
        
        return <div>
            <form onSubmit={this.submit}>
                <input type="text" name="name" placeholder="name" required/>
                <input type="text" name="username" placeholder="username" required />
                <input type="text" name="city" placeholder="city" required/>
                <input type="text" name="country" placeholder="country" required/>
                <input type="password" name="password" placeholder="password" required/>
                <button>Register</button>

                {this.state.feedback ? <p>{this.state.feedback}</p> : null}
            </form>

            <a href="" onClick={this.goToLogin}>Login</a>
        </div>
    }
}