function Profile(props) {
    const goBack = event =>{
        event.preventDefault()
        props.onReturnClick()
    }
    const changeName =event => {
        event.preventDefault()
        props.onChangeNameClick()
    }
    const changePassword = event => {
        event.preventDefault()
        props.onChangePasswordClick()
    }
    return <div>
        <h2>Profile</h2>
        <button onClick ={goBack}>Return</button>
        <button onClick={changeName}>Change name</button>
        <button onClick={changePassword}>Change password</button>        
    </div>
}

