function Search(props) {
    
    const submit = event => {
        event.preventDefault()

        var query = event.target.query.value

        props.onQuery(query)
    }
    
    return <form onSubmit={submit} >
        <h4>Busca tu coche</h4>
        <input className="input" type="text" name="query" placeholder="criterio" defaultValue={props.value} />
        <button className="button">Buscar</button>
    </form>
}