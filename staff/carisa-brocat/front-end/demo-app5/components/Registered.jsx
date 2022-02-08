function Registered(props) {
    return <div>
        <h2>User succesfully registered  <button
            onClick={event => {
                event.preventDefault

                props.onRegisteredLoginClick()
            }}
        >Login</button></h2>

    </div>
}