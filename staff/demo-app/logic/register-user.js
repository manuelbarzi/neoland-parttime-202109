function registerUser(name, username, password, callback) {
    if (typeof name !== 'string') throw new TypeError(name + ' is not string')
    if (!name.trim()) throw new Error('name is empty or blank')

    if (typeof username !== 'string') throw new TypeError(username + ' is not string')
    if (!username.trim()) throw new Error('username is empty or blank')

    if (typeof password !== 'string') throw new TypeError(password + ' is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 8) throw new Error('password length is smaller than 8 characters')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function() {
        if (this.status === 400 || this.status === 409) {
            var res = JSON.parse(this.responseText)

            var error = res.error

            callback(new Error(error))
        } else if (this.status === 201) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json')

    var data = { name: name, username: username, password: password }

    var json = JSON.stringify(data)

    xhr.send(json)
}

/* class ChangeUser extends React.Component{
    constructor(){
        super()
        this.state ={ feedback:null}
    }
render(){
    return <div>
        <form onSubmit={event => {
            event.preventDefault()
            const username = event.target.username.value
            const data = {}
            data.username=username
            try {
                modifyUser(this.props.token,data,(error)=>{
                    if(error){
                        this.setState({feedback: error.message})
                        return
                    }
                    this.props.onModifyed()
                })
            } catch (error) {
                this.setState({ feedback: error.message })
            }
        }} >
            <input type="text" name="username" placeholder="New username" />
            <button>Confirm</button>
            {this.state.feedback ? <p>{this.state.feedback}</p> : null}
        </form>
    </div>
}
}*/
/*else if (this.state.view === 'changeuser')
            return <ChangeUser token={this.state.token}
            onModifyed={()=> this.setState({view:'login'})}
            />
    }*/