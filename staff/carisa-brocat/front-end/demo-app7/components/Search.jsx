function Search({ onQuery }) {
    const submit = event => {
        event.preventDefault()

        var query = event.target.query.value

        onQuery(query)
    }
    return <form onSubmit={submit}>
        <input type='text' name='query' placeholder='Example: "blue"' />
        <button>Search</button>
    </form>
}

