class ModifyData extends React.Component {
    constructor() {
        logger.debug('ModifyData -> constructor')
        super()

        this.state = { feedback: null }
    }

    ComponentDidMount() {
        logger.debug('ModifyData -> component did mount')
    }

    render() {
        logger.debug('ModifyData -> render')
        return <div className="container">
            <form className="form form-container" onSubmit={event => {
                event.preventDefault()

                const data = {}

                const name = event.target.name.value
                const username = event.target.username.value
                const city = event.target.city.value

                data.name = name
                data.username = username
                data.city = city


                try {
                    modifyUser(this.props.token, data, (error) => {
                        if (error) {
                            this.setState({ feedback: error.message })

                            return
                        }
                        this.props.onModifyed()
                    })

                } catch (error) {
                    this.setState({ feedback: error.message })
                }
            }}>
                <h2 className="title-form">Cambia tus datos</h2>

                <input className="input input-form" type="text" name="name" placeholder="Nuevo nombre" />
                <input className="input input-form" type="text" name="username" placeholder="Nuevo usuario" />
                <input className="input input-form" type="text" name="city" placeholder="Nueva ciudad" />

                <button className="button button-form">Enviar</button>
            </form>

            <p>Vuelve a la <a href="" onClick={event => {
                event.preventDefault()

                this.props.onModifyed()
            }}>página principal</a></p>

            {this.state.feedback ? <p>{this.state.feedback}</p> : null}

        </div>
    }
}