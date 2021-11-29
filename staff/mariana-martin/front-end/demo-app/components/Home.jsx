//compo de tipo clase, porque irá cambiando el nombre de cada usuario:
//que llame a la API, al retrieve user y pida el usuario

class Home extends React.Component {
    constructor() {

        logger.debug('Home --> constructor')

        super() //consturctor padre

        this.state = { name: null } //inicalmente no está cargado el name
    } 
    
    //uso el método didMount, (ciclo de vida)
    componentDidMount() {  //método cuando ya se ha montado el componente en el DOM virtual, aparece después de pintar la 1era vez

        logger.debug('Home --> did mount')

        try {
            retrieveUser(this.props.token, (error, user) => {
                if (error) return alert(error.message)  //si el token está mal

                this.setState({name: user.name})
            })
        } catch (error) {
            alert(error.message)
        }
    }


    render() {                  //este if, para que no muestre la palabra "world" antes del nombre

        logger.debug('Home --> constructor')

        if (this.state.name){  
            return  <h1>Hello, {this.state.name ? this.state.name : 'World' }!</h1>
        } else {
            return null
        }
       
        
    }
}



