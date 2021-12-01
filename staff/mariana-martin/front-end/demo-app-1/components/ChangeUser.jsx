class ChangeUser extends React.Component {
    constructor() {

        logger.debug('changeuser --> constructor')

        super()
        this.state = { feedback: null }

    }

    componentWillMount() {
        logger.debug('changeuser --> will mount')
    }

    componentDidMount() {
        logger.debug('changeuser --> did mount')
    }


    render() {

        logger.debug('changeuser --> render')
        
        return <div>
            <form onSubmit={event => {
                event.preventDefault()

                const username = event.target.username.value
                const data = {}
                data.username = username

                try {
                    modifyUser(this.props.token,data,(error) => {

                        if (error) {
                            this.setState({ feedback: error.message })
                            return

                        }
                        //llamo al onModify desde la app
                        this.props.onModify()

                    })
                } catch (error) {

                    this.setState({ feedback: error.message })
                }

            }} >    
            <input type="text" name="username" placeholder="new username" />
            <button>Confirm</button>

                                    {/* p para que me mande el feedback en parrafo */}
            {this.state.feedback ? <p> {this.state.feedback} </p> : null} 
                                
            </form>

        </div>


    }

}







