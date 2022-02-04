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

    render() {
        logger.debug('Login -> render')

        return <div className="container container--max-height">
            <div className="login container panel container--column container--padding-m">
                <form className="container container--column container--margin-m" onSubmit={event => {
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
                    <input className="container panel__input login__input container--margin-m" type="text" name="username" placeholder="username" />
                    <input className="container panel__input login__input container--margin-m" type="password" name="password" placeholder="password" />

                    <button className="button login__button panel__button container container--margin-m">Login</button>

                    {this.state.feedback ? <p>{this.state.feedback}</p> : null}
                </form>

                <a className="login__link" href="" onClick={event => {
                    event.preventDefault()

                    this.props.onRegisterClick()
                }}>Register</a>
            </div>
        </div>
    }
}