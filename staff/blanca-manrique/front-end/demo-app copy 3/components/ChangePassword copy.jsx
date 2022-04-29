class ChangePassword extends React.Component{
    constructor(){
        logger.debug('Change Password -> constructor')
        super()

        this.state = {feedback: null}
    }
    componentWillMount() {
        logger.debug('Change Password -> will mount')
    }
    render(){
        logger.debug('Change Password -> render')
        return <div>
            <form onSubmit ={event =>{
                event.preventDefault()
                const data = { 
                    oldpassword: event.target.oldpassword.value,
                    newpassword: event.target.newpassword.value,
                    confirmpassword: event.target.confirmpassword.value
                }
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
                <input type="text" name="oldpassword" placeholder="old password"/>
                <input type="text" name="newpassword" placeholder="new password"/>
                <input type="text" name="confirmpassword" placeholder="confirm password"/>
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