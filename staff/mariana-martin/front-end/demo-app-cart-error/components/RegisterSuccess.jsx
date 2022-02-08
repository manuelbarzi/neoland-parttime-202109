function RegisterSuccess(props) {
    return <p> User successfully register, you can: 
        <a href="" onClick={ event => { //link de Login

        event.preventDefault()

        props.onLoginClick() //callback al Login

    }}>Login</a> </p>
}