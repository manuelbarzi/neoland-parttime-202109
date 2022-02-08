function Registered({onRegisteredLoginClick}) {

    const goToLogin = event => {
        event.preventDefault()

        onRegisteredLoginClick()
    }
    
    return <div>
        <h2>User succesfully registered  <button
            onClick={goToLogin}
        >Login</button></h2>

    </div>
}

export default Registered