function RegisterSuccess(props) {
    logger.debug('RegisterSuccess -> "render"')

    return <p>User successfully register, you can proceed to <a href="" onClick={event => {
        event.preventDefault()

        props.onLoginClick()
    }}>Login</a>.</p>
}                                       