// class Forecast extends React.Component {
//     constructor() {
//         super()

//         this.state = { values: null }
//     }

//     componentDidMount() {
//         try {
//             retrieveForecast(this.props.apiKey, this.props.city, (error, values) => {
//                 if (error) return alert(error.message)

//                 this.setState({ values })
//             })
//         } catch (error) {
//             alert(error.message)
//         }
//     }

//     render() {
//         if (this.state.values) {
//             return <div>
//                 <h3>Forecast in {this.props.city}</h3>
//                 <ul>
//                     {this.state.values.map(value => <li key={value.datetimeStr}>{value.temp} ºC</li>)}
//                 </ul>
//             </div>
//         } else return null
//     }
// }

class Forecast extends React.Component {
    constructor() {
        super()

        this.state = { values: null }
    }

    componentDidMount() {
        try {
            retrieveForecast(this.props.apiKey, this.props.city, (error, values) => {
                if (error) return alert(error.message)

                this.setState({ values })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        if (this.state.values) {
            return <div>
                <h3>Forecast in {this.props.city}</h3>
                <ul>
                    {this.state.values.map(value => <li key={value.datetimeStr}>{new Date(value.datetimeStr).toString().slice(0, 10)}, {value.temp} ºC</li>)}
                </ul>
            </div>
        } else return null
    }
}