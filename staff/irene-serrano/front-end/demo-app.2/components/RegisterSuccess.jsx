function RegisterSuccess(props){
    return <p>User Successfully register, you can proceed to <a href="" onClick={event =>{
        event.preventDefault()
        props.onLoginClick()
    }}>login</a>.</p>
}