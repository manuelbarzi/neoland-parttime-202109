function Hello(props) { // dumb component (presentational component)
    return <h1 className="title">Hello, {props.name}!</h1>
}

function CoolButton(props) {
    return <button className="cool-button" onClick={props.onClicked}>{props.text}</button>
}

ReactDOM.render([
    <Hello name="Pepito"/>,
    <Hello name="Marta"/>,
    <CoolButton text="press me" onClicked={function() {
        alert('hola mundo')
    }} />,
    <CoolButton text={'press me again'} onClicked={function() {
        alert('hello world')
    }} />
], document.getElementById('root'))