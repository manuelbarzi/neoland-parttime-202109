class Register extends React.Component {
    constructor() {

        logger.debug('Register --> constructor')

        super()

        this.state = {feedback: null}
    }

    render() {

        logger.debug('Register --> render')

        return <div>
            <form onSubmit={event => {
                event.preventDefault()

                const name = event.target.name.value  //evento del Submit -> el target es el form -> el name y su valor dentro del form
                const username = event.target.username.value
                const password = event.target.password.value

                try { //llamo a la lógica del register
                    registerUser(name, username, password, error => {
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
                <input type="text" name="username" placeholder="username"/>
                <input type="text" name="city" placeholder="city"/>
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