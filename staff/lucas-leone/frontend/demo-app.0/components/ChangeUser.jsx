class ChangeUser extends React.Component{
    constructor(){
        super()
        this.state ={ feedback:null}
    }
render(){
    return <div>
        <form onSubmit={event => {
            event.preventDefault()

            const username = event.target.username.value
            const data = {}
            data.username=username
            try {
                modifyUser(this.props.token,data,(error)=>{
                    if(error){
                        this.setState({feedback: error.message})

                        return
                    }

                    this.props.onModifyed()
                })
            } catch (error) {
                this.setState({ feedback: error.message })
            }

        }} >
            <input type="text" name="username" placeholder="New username" />

            <button>Confirm</button>

            {this.state.feedback ? <p>{this.state.feedback}</p> : null}
                
        </form>
    </div>
}
}