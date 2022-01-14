class ShoppingCart extends React.Component {
    constructor() {
        super()

        this.state = {
            shoppingcart: null,
        }
    }

        componentDidMount() {
            logger.debug('Cart -> Component did Mount')
    
            try {
                retrieveCartVehicles(sessionStorage.token, (error, shoppingcart) => {
                    if (error) alert(error.message)
    
                    this.setState({ shoppingcart })
                })
    
            } catch (error) {
                alert(error.message)
            }
        }
           render(){
               return(
               <div> 
                   <h1>prueba</h1>
               </div> 
               )
           }

            

    
}