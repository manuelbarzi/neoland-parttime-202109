// demo 2

const picasso = {
    name: 'Pablo',
    surname: 'Picasso',

    orderPainting() {
        const painting = Math.random().toString(36).substring(2)

        // return function() { // doesnt work
        //     return `${painting} ${this.surname}`
        // }

        // return function() { // it works!
        //     return `${painting} ${this.surname}`
        // }.bind(this)

        return () => `${painting} ${this.surname}` // it works too
    }
}

const painting = picasso.orderPainting()

console.log(painting())


// demo 3

class Component {
    setState(state) {
        this.state = state
    }
}

function Button(onClick) {
    onClick()
}

class Panel extends Component {
    constructor() {
        super()

        this.state = { count: 0 }

        //this.updateClick = this.updateClick.bind(this) // [2]
    }

    // updateClick() { // [1][2]
    //     this.setState({ count: this.state.count + 1 })

    //     console.log(`clicked ${this.state.count} times`)
    // }

    updateClick = () => { // [3]
        this.setState({ count: this.state.count + 1 })

        console.log(`clicked ${this.state.count} times`)
    }

    render() {
        // Button(function() { // fail! callback not binded to panel instance [1]
        //     this.setState({ count: this.state.count + 1})

        //     console.log(`clicked ${this.state.count} times`)
        // })

        // Button(function() { // it works! callback binded to panel instance manually (explicitly)
        //     this.setState({ count: this.state.count + 1})

        //     console.log(`clicked ${this.state.count} times`)
        // }.bind(this))

        // Button(() => { // it works! callback binded to panel instance automatically (implicitly)
        //     this.setState({ count: this.state.count + 1 })

        //     console.log(`clicked ${this.state.count} times`)
        // })

        // Button(this.updateClick) // fails again (same reason as [1])
        //Button(this.updateClick.bind(this)) // it works [1]
        Button(this.updateClick) // now it works! because of [2] or [3]
    }
}

const panel = new Panel()
panel.render()

