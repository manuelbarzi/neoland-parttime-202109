function RegisterSuccess({ onLoginClick }) {
    logger.debug('RegisterSuccess --> "render"')

    const clickLogin =  event => {
        event.preventDefault()

        onLoginClick()
    }

    return <p>User successfully register, you can proceed to <a href="" onClick={clickLogin}>Login</a>.</p>
}