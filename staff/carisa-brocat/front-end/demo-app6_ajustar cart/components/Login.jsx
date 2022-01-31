class Login extends React.Component {
    constructor() {
        logger.debug('Login -> constructor')

        super()

        this.state = { feedback: null }
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

    submit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    this.setState({ feedback: error.message })

                    return
                }

                sessionStorage.token = token

                this.props.onLoggedIn(token)
            })

        } catch (error) {
            this.setState({ feedback: error.message })
        }
    }

    goToRegister = event => {
        event.preventDefault()
        
        this.props.onRegisterClick()
    }

    render() {
        logger.debug('Login -> render')

        return <div>
            {/* creando formulario de login */}
            <form onSubmit={this.submit}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button>Login</button>

                {this.state.feedback ? <p>{this.state.feedback}</p> : null}
            </form>

            <a href="" onClick={this.goToRegister}>Register</a>

        </div>

    }

}