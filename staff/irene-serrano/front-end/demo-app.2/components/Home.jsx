class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            name: null,
            query:null,
            vehicleId: null,
            view: null
        }
    }
    componentDidMount(){ 
        console.log(this, this.props)
        try {
            retrieveUser(this.props.token, (error, user)=>{
                if(error){
                    alert(error.message)
                    delete sessionStorage.token
                    this.props.onLoggedOut()
                }
                this.setState({name:user.name})
                /* sessionStorage.token = this.props.token */
            })
        
        } catch (error) {
            alert(error.message)
            delete sessionStorage.token
            this.props.onLoggedOut()
        }
    }

    render(){
        if(this.state.name) 
        return <div>
            <h1>Hello, {this.state.name? this.state.name : 'World!'}</h1>
            <button onClick={()=> {
                delete sessionStorage.token
                this.props.onLoggedOut()
            }}>Logout</button>
            
            <Search onQuery={query => this.setState({ query, view: 'results'})} />

            {this.state.view === 'results' && <Results query={this.state.query} onItemClick={vehicle => this.setState({vehicleId, view: 'detail '})}/> }

            {this.state.view === 'detail' && <Detail itemId={this.state.vehicleId} />}

        </div>
        else return null
    } 
   


}