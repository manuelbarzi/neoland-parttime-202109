function PostRegister (props) {

    const goToLogin = event => {
        event.preventDefault()

        props.onLoginClick()
    }
    
    return <p className="container feedback-ok">Se ha registrado correctamente <a href="" onClick={goToLogin}>Login</a></p>
}