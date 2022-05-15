function PostRegister(onLoginClick) {

    const clickToLogin = event => {
        event.preventDefault()
        onLoginClick()
    }


    return <p>User successfully registered, you may proceed to <a href="" onClick={clickToLogin}>Login</a></p>
}

export default PostRegister 