function RegisterSuccess({onLoginClick}) {
    logger.debug('RegisterSuccess -> "render"')

    return <p>User successfully register, you can proceed to <a href="" onClick={event => {
        event.preventDefault()

        onLoginClick()
    }}>Login</a>.</p>
}