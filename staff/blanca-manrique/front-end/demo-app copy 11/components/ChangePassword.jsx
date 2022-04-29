class ChangePassword extends React.Component{
    constructor(){
        logger.debug('Change Password -> constructor')
        super()

        this.state = {feedback: null}
    }
    componentWillMount() {
        logger.debug('Change Password -> will mount')
    }
    
    close = event =>{
        event.preventDefault()
        this.props.closeSetting()
    }

    confirm = () => {
        delete sessionStorage.token
        this.props.updatedPassword()
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
                    modifyUser(sessionStorage.token, data, (error) =>{
                        if(error){
                            this.setState({feedback: error.message})
                            return
                        }
                        this.setState({feedback:"password successfully change"})
                        this.props.updatedPassword()
                    })
                } catch (error) {
                    this.setState({feedback: error.message})
                }
            }}>
                <input type="text" name="oldpassword" placeholder="old password"/>
                <input type="text" name="newpassword" placeholder="new password"/>
                <input type="text" name="confirmpassword" placeholder="confirm new password"/>
                <button onClick={this.confirm}>Confirm</button>
                {this.state.feedback? <p>{this.state.feedback}</p> :null}
            </form>
            <button onClick={this.close}>X</button>
        </div>
    }
}