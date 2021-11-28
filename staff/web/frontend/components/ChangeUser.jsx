class ChangeUser extends React.Component{
    constructor(){
        super()
        this.state ={ feedback:null}
    }
render(){
    <div>
        <form onSubmit={event => {
            event.preventDefault()

            const username = event.target.username.value

            try {
                modifyUser(this.props.token,username,(error,token)=>{
                    
                })
            } catch (error) {
                
            }

        }} >
        
                
            }
        </form>
    </div>
}
}