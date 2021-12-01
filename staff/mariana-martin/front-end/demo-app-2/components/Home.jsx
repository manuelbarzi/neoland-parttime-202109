

class Home extends React.Component {
    constructor() {

        logger.debug('Home --> constructor')

        super() 

        this.state = { name: null } 
    } 
    
    //uso el método didMount, (ciclo de vida)
    componentDidMount() {  //método cuando ya se ha montado el componente en el DOM virtual, aparece después de pintar la 1era vez

        logger.debug('Home --> did mount')

        try {
            retrieveUser(this.props.token, (error, user) => {
                if (error)  {
                    alert(error.message)
                    delete sessionStorage.token

                    this.props.onLoggedOut()

                }

                this.setState({name: user.name})
                
                   
            })
        } catch (error) {
            alert(error.message)
            delete sessionStorage.token

            this.props.onLoggedOut()
        }
    }


    render() {                  //este if, para que no muestre la palabra "world" antes del nombre

        logger.debug('Home --> constructor')

        if (this.state.name){  
            return <div> 
                <h1>Hello, {this.state.name ? this.state.name : 'World' }!</h1>
                <button onClick={() => {delete sessionStorage.token 
                    this.props.onLoggedOut()}} >Logout</button>
                </div>

        } else {
            return null
        }
       
        
    }
}



