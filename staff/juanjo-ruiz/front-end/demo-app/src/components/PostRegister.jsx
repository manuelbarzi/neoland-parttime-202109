function PostRegister({ onLoginClick }) {

    const goToLogin = event => {
        event.preventDefault()

        onLoginClick()
    }

    return <p className="container feedback-ok">Se ha registrado correctamente <a href="" onClick={goToLogin}>Login</a></p>
}

export default PostRegister