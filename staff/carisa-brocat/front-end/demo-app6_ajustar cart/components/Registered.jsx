function Registered(props) {

    const goToLogin = event => {
        event.preventDefault

        props.onRegisteredLoginClick()
    }
    
    return <div>
        <h2>User succesfully registered  <button
            onClick={goToLogin}
        >Login</button></h2>

    </div>
}