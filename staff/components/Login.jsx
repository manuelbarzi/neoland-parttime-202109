class Login extends React.Component {
    contructor() {
        super()

        this.state = { feedback: null }
    }

    render() {
        <div>
        <form onSubmit={event => {
            event.prevenDefault()

            const username = event.target.username.value
            const password = event.target.password.value

            try {

                authenticateUser(username, password, (error, token) => {
                    if (error) {
                        this.setState({ feedback: error.message })
                        return
                    }
                    this.props.onLoggenIn(token)
                })
            } catch (error) {
                this.setState({ feedback: error.message })
            }
        }}>
            <input type="text" name="username" placeholder="username" />
            <input type="passwordt" name="password" placeholder="password" />

            <button>Login</button>

            {this.state.feedback ? <p>{this.state.feedback}</p> : null}

        </form>
            <a href="" onClick={event => {
                event.prevenDefault()

                this.props.onRegisterClick()
            }}>Register</a>
    </div>
    }
}