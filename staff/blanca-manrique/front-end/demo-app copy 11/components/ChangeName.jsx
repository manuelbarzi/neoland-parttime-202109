class ChangeName extends React.Component{
    constructor(){
        super()

        this.state = {feedback: null, message: null}
    }
    submit = event =>{
        event.preventDefault()
        const data = {name: event.target.name.value}

        try{
            modifyUser(sessionStorage.token, data, (error)=>{
                if(error){
                    this.setState({feedback:error.message})
                    return
                }
                this.setState({message:"name successfully change"})
            })

        }catch(error){
            this.setState({feedback:error.message})
        }  
    }

    close = event =>{
        event.preventDefault()
        this.props.closeSetting()
    }

    render(){
        return <div>
        <form onSubmit={this.submit}>
            <input type="text" name="name" placeholder="name"/>
            <button>Change name</button>
            {this.state.feedback? <p>{this.state.feedback}</p> :null}
            {this.state.message? <p>{this.state.message}</p> :null}

        </form>
        <button onClick ={this.close}>X</button>
        </div>
    }
}