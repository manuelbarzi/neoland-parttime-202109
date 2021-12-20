class PostRegister extends React.Component{
    constructor(){
        logger.debug('PostRegister -> "constructor"')
        super()
    }
    render(){
        logger.debug('PostRegister -> render')
        return <div>
        <h2>User successfully register</h2>
        {/* <a href="" onClick={event =>{
            event.preventDefault()
            this.props.onPostRegisterClick()
        }} >Login</a> */}

        <button onClick={event =>{
            event.preventDefault()
            this.props.onLoginClick()
            }}>Login</button>
    </div>
    } 
}
