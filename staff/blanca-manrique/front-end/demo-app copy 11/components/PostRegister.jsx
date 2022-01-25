function PostRegister(props) {
    logger.debug('PostRegister -> render')
    
    return <div>
        <h2>User successfully register</h2>
        <button onClick={event => {
            event.preventDefault()
            props.onLoginClick()
        }}>Login</button>
    </div>
} 
