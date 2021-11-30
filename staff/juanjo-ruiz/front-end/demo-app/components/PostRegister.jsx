function PostRegister (props) {

    return <p>Se ha registrado correctamente <a href="" onClick={event => {
        event.preventDefault()

        props.onLoginClick()
    }}>Login</a>,</p>
}