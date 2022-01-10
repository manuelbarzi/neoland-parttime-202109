function RegisterSuccess(props) {
    return <p> User successfully register, you can: 
        <a href="" onClick={ event => { //link de Login

        event.preventDefault()

        props.onLoginClick() //callback que viene por props, al Login que le pasaré desde la app

    }}> Login </a> </p>
}