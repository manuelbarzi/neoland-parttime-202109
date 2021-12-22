// "React" (pseudo React)

class Component {
    setState(state) {
        this.state = state

        this.render()
    }
}

const React = {
    Component
}

// custom components

class Hello extends React.Component {
    constructor() {
        super()

        this.state = { name: null }
    }

    render() {
        return `<h1>Hello, ${this.state.name}!</h1>`
    }
}

// react internals

const hello = new Hello // <Hello />

hello.setState({ name: 'Irene' }) // this.setState({ name: 'Irene' })

console.log(hello.render()) // render

hello.setState({ name: 'Raquel' }) // this.setState({ name: 'Requel' })

console.log(hello.render()) // render