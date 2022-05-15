// class Forecast extends React.Component {
//     constructor(){
//         super()
        
//         try {
//             retrieveForecast(this.props.apiKey, this.props.city, (error, values => {

//                 if (error)
//                 return alert(error.message)

//                 this.setState({ values })
//             }))



//         } catch (error) {
//             alert (error.message)
//         }
//     }
//     render() {
//         if (this.state.values) {
//             return 
//             <div>
//                 <h2>El tiempo en {this.props.city}</h2>
//             <ul>
//                 {this.state.values.map()}
//             </ul>
//             </div>
//         }else
//         return null
//     }
// }