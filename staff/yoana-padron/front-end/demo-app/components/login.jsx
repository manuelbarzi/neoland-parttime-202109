class Login extends React.Component {
    constructor() {
        super()

        this.state = { feedback: null }
    }

    render() {
        return <div>
            <form onSubmit={event => {
                event.preventDefault()

                const username = event.target.username.value
                const password = event.target.password.value

                try {
                    authenticateUser(username, password, (error, token) => {
                        if (error) {
                            this.setState({ feedback: error.message })

                            return
                        }

                        this.props.onLoggedIn(token)
                    })
                } catch (error) {
                    this.setState({ feedback: error.message })
                }
            }}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />

                <button>Login</button>

                {this.state.feedback ? <p>{this.state.feedback}</p> : null}
            </form>

            <a href="" onClick={event => {
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</a>
        </div>
    }
}