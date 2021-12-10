function PostRegister (props) {

    return <p className="container feedback-ok">Se ha registrado correctamente <a href="" onClick={event => {
        event.preventDefault()

        props.onLoginClick()
    }}>Login</a></p>
}