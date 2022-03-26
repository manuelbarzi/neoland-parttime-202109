class Home extends React.Component{
    constructor(){
        super()
        this.state ={
            token:null,
            name: null
        }
    }

   getUser(){
    console.log(this.state)
        console.log('got user')
        try{
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    console.log(error.message);
                  return;
                }else {
                    this.setState({token})
                    retrieveUser(token, (error, user)=>{
                    if(error){
                        console.log(error.message)
                    }
                    this.setState({name: user.username})
                })
                }
                
            })
        }
        catch( error){
            console.log(error.message)
        }
    }
    render(){
        this.getUser()


        return <div className="panel">
            <h2>Welcome, {this.state.name? this.state.name : 'anon'}</h2>


        </div>
    }
}