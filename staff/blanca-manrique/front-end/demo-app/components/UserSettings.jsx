class UserSetting extends React.Component{
    constructor(){
        super()

        this.state = {feedback: null, message: null}
    }
    render(){
        return <div>
        <form onSubmit={event =>{
            event.preventDefault()
            const data = {name: event.target.name.value}

            try{
                modifyUser(this.props.token, data, (error)=>{
                    if(error){
                        this.setState({feedback:error.message})
                        return
                    }
                    this.setState({message:"name successfully change"})
                })

            }catch(error){
                this.setState({feedback:error.message})
            }  
        }}
        
        >

            <input type="text" name="name" placeholder="name"/>
            <button>Change name</button>
            {this.state.feedback? <p>{this.state.feedback}</p> :null}
            {this.state.message? <p>{this.state.message}</p> :null}

        </form>
        <button onClick ={event =>{
            event.preventDefault()
            this.props.CloseSetting()
        }}>X</button>
        </div>
    }
}