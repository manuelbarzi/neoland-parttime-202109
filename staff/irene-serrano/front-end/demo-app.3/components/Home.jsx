class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            name: null,
            query:null,
            vehicleId: null,
            view: null,
            favs: null,
        }
    }
    
    componentDidMount(){ 
     
        try {
            retrieveUser(this.props.token, (error, user)=>{
                if(error){
                    alert(error.message)
                    delete sessionStorage.token
                    this.props.onLoggedOut()
                }
                console.log(user)
                sessionStorage.token = this.props.token
                this.setState({name:user.username,
                favs:user.favs})
               
            })
        
        } catch (error) {
            alert(error.message)
            delete sessionStorage.token
            this.props.onLoggedOut()
        }
    }
  

    render(){
        if(this.state.name) 
        return <div className="panel home-comp">
            <h1>Hello, {this.state.name? <a>{this.state.name}</a> : 'World!'}</h1>

            {/* togle Fav cars (num items en lista), muesta/oculta lista */}
            <p className="fav-list">Fav cars ({this.state.favs.length})</p>
            

        </div>
        else return null
    } 
   


}