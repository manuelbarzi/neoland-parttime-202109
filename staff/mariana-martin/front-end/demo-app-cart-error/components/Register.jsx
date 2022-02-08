class Register extends React.Component {
    constructor() {

        logger.debug('Register --> constructor')

        super()

        this.state = {feedback: null}
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

        logger.debug('Register --> render')

        return <div>
            <form onSubmit={event => {
                event.preventDefault()

                const name = event.target.name.value  //evento del Submit -> el target es el form -> el name y su valor dentro del form
                const city = event.target.city.value
                const country = event.target.city.value
                const username = event.target.username.value
                const password = event.target.password.value

                try { //llamo a la lógica del register
                    registerUser(name, city, country, username, password, error => {
                        if (error){
                        this.setState({ feedback: error.message}) //cambia el this.state de arriba

                        return
                    }
                    this.props.onRegistered() //cuando no hay error y alguien se ha registrado
                    }) 
                } catch (error) {
                    this.setState({ feedback: error.message})
                 
                   
                }
           

            }}>
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="city" placeholder="city"/>
                <input type="text" name="country" placeholder="country"/>
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password" />

                <button>Register</button>

                {this.state.feedback ? <p> {this.state.feedback} </p> : null}

            </form>


            <a href="" onClick={event => {
                event.preventDefault()  //evento que no permite que se actualice la página, y lo podamos controlar con javascript
                this.props.onLoginClick()

            }}>Login</a>
        </div>
    }
}