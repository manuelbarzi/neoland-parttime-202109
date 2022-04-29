class ChangePassword extends React.Component{
    constructor(){
        super()

        this.state = {feedback: null}
    }

    render(){
        return <div>
            <form onSubmit ={event =>{
                event.preventDefault()
                const data = { password: event.target.password.value}
                try {
                    modifyUser(this.props.token, data, (error) =>{
                        if(error){
                            this.setState({feedback: error.message})
                            return
                        }
                        this.setState({feedback:"password successfully change"})
                        this.props.onAllDone()
                    })
                } catch (error) {
                    this.setState({feedback: error.message})
                }
            }}>
                <input type="text" name="password" placeholder="password"/>
                <button>Confirm</button>
                {this.state.feedback? <p>{this.state.feedback}</p> :null}
            </form>
            <button onClick={event =>{
                event.preventDefault()
                this.props.ChangedPasswordOut()
            }}>X</button>
        </div>
    }
}