function PostRegister(props) {
    logger.debug('PostRegister -> render')
    return <div>
        <h2>User successfully register</h2>
        {/* <a href="" onClick={event =>{
            event.preventDefault()
            this.props.onPostRegisterClick()
        }} >Login</a> */}
        <button onClick={event => {
            event.preventDefault()
            props.onLoginClick()
        }}>Login</button>
    </div>
} 
