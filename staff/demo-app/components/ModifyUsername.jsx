class ModifyUsername extends React.Component {
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

                const username = event.target.username.value
                const data ={}
                data.username = username

                try {
                    modifyUser(this.props.token, data, (error) => {
                        if (error){
                            this.setState ({feedback : error.message})
                            return
                        }
                        alert ('Username succesfully modified')
                        this.props.onModifyClick ()
                    })
                } catch (error){
                    this.setState ({ feedback : error.message})
                }
            }}>
                <input type="text" name="username" placeholder="New username" />
                <button>Confirm</button>
                {this.state.feedback ? <p>{this.state.feedback}</p> : null}

                <button onClick={() => {


                    this.props.onGoBack()
                }}>Go back</button>

            </form>

        </div>

    }

}


