function Profile(props) {
    return <div>
        <h2>Profile</h2>

        <button onClick ={event =>{
            event.preventDefault()
            props.onReturnClick()
        }}>Return</button>

        <button onClick={event => {
            event.preventDefault()
            props.onUserSettingClick()
        }}>Change name</button>

        <button onClick={event => {
            event.preventDefault()
            props.modifiedPassword()
        }}>Change password</button>        
    </div>
}

