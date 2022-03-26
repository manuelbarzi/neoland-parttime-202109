function RegisterSuccess(props){
    return <p>User successfullt registered, you can proceed to
        <a href="" onClick={e => {
            e.preventDefault()
            props.onLoginClick()
        }}>Login</a>.
    </p>
}