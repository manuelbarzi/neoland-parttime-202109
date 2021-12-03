class Register extends React.Component {
    constructor() {
        super()

        this.state = { feedback: null }
    }

    render() {
        return <div>
            <form onSubmit={event => {
                event.preventDefault()

                const name = event.target.name.value
                const city = event.target.city.value
                const username = event.target.username.value
                const password = event.target.password.value

                try {
                    registerUser(name, city, username, password, error => {
                        if (error) {
                            this.setState({ feedback: error.message })

                            return
                        }

                        this.props.onRegistered()

                    })
                }   catch (error) {
                    this.setState({ feedback: error.message})
                }
            }}>
                <input className="input" type="text" name="name" placeholder="name" />
                <input className="input" type="text" name="city" placeholder="city" />
                <input className="input" type="text" name="username" placeholder="username" />
                <input className="input" type="password" name="password" placeholder="password" />
                
                <button className="cool-button">Register</button>

                {this.state.feedback ? <p>{this.state.feedback}</p> : null }
            </form>

            <a href="" onClick={event => {
                event.preventDefault()

                this.props.onLoginClick()
            }}>Login</a>
        </div>
    }
}