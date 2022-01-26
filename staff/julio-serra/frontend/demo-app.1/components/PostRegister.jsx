function PostRegister(props) {
    return <p>User successfully registered, you may proceed to <a href="" onClick={event => {
        event.preventDefault()

        props.onLoginClick()
    }}>Login</a></p>
}
