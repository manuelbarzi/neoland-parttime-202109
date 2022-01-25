function PostRegister(onLoginClick) {
    logger.debug('PostRegister -> render')

    const goToLogin= event => {
        event.preventDefault()
        onLoginClick()
    }
    
    return <div>
        <h2>User successfully register</h2>
        <button onClick={goToLogin}>Login</button>
    </div>
} 
