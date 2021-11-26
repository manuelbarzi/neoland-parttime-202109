class Home extends React.Component{
    constructor(){
        super()

        this.state = {name: null}
    }
    render(){
        return <div>
        <h1>Hello World</h1>
        <button onClick={event =>{
            event.preventDefault()
            this.props.onUserSettingClick()
            }}>Change name</button>
    </div>
    }
 
}