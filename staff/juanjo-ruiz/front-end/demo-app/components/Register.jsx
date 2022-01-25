const { Component } = React

class Register extends Component {
    constructor() {
        super()

        this.state = { feedback: null }
    }

    onRegisterUser = event => {
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
        } catch (error) {
            this.setState({ feedback: error.message })
        }
    }

    showLogin = event => {
        event.preventDefault()

        this.props.onLoginClick()
    }

    render() {
        return <div className="container">
            <form className="form form-container" onSubmit={this.onRegisterUser}>
                <h2 className="title title-form">Registrate</h2>

                <input className="input input-form" type="text" name="name" placeholder="nombre" requerid/>
                <input className="input input-form" type="text" name="city" placeholder="ciudad" requerid/>
                <input className="input input-form" type="text" name="username" placeholder="usuario" requerid/>
                <input className="input input-form" type="password" name="password" placeholder="contraseña" requerid/>

                <button className="button button-form">Registrate</button>

                {this.state.feedback ? <p>{this.state.feedback}</p> : null}
            </form>

            <p><a href="" onClick={this.showLogin}>Inicia sesión</a> si ya estas registrado</p>
        </div>
    }
}