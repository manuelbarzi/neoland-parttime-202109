class Login extends React.Component {
    constructor() {
        logger.debug('Login -> constructor')

        super()

        this.state = { feedback: null }
    }

    componentWillMount() {
        logger.debug('Login --> will mount')
    }

    componentDidMount() {
        logger.debug('Login --> did mount')
    }

    componentWillUnmount() {
        logger.debug('Login --> will unmount')
    }

    render() {
        logger.debug('Login --> render')

        return <div className="container">
            <div className="container">
                <form className="container" onSubmit={event => {
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
                }}>
                    <input className="container" type="text" name="username" placeholder="username" />
                    <input className="container" type="password" name="password" placeholder="password" />

                    <button className="container__btn">Login</button>

                    {this.state.feedback ? <p>{this.state.feedback}</p> : null}
                </form>

                <a className="login" href="" onClick={event => {
                    event.preventDefault()

                    this.props.onRegisterClick()
                }}>Register</a>
            </div>
        </div>
    }
}