class ModifyPassword extends React.Component {
    constructor() {
        logger.debug('Modify ->constructor')
        super()

        this.state = { feedback: null }
    }
    componentWillMount() {
        logger.debug('Home -> will mount')
    }
    componentDidMount() {
        logger.debug('Home -> did mount')
    }
    render() {
        logger.debug('Modify -> render')

        return <div>
            <form onSubmit={event => {
                event.preventDefault()

                const password = event.target.username.value
                const data ={}
                data.password = password

                try {
                    modifyUser(this.props.token, data, (error) => {
                        if (error){
                            this.setState ({feedback : error.message})
                            return
                        }
                        alert ('Password succesfully modifed')
                        this.props.onModifyClick ()
                    })
                } catch (error){
                    this.setState ({ feedback : error.message})
                }
            }}>
                <input type="text" password="password" placeholder="New password" />
                <button>Confirm</button>
                {this.state.feedback ? <p>{this.state.feedback}</p> : null}

                <button onClick={() => {


                    this.props.onGoBack()
                }}>Go back</button>

            </form>

        </div>

    }

}
