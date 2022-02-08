function Search(props) {
    const submit = event => {
        event.preventDefault()

        var query = event.target.query.value

        props.onQuery(query)
    }
    return <form onSubmit={submit}>
        <input type='text' name='query' placeholder='Example: "blue"' />
        <button>Search</button>
    </form>
}

