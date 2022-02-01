function Search(onQuery) {

    const submit = event => {
        event.preventDefault()

        var query = event.target.query.value

        onQuery(query)
    }

    return <form onSubmit={submit} >
        <h4>Busca tu coche</h4>
        <input className="input" type="text" name="query" placeholder="criterio" defaultValue={submit} />
        <button className="button">Buscar</button>
    </form>
}

export default Search