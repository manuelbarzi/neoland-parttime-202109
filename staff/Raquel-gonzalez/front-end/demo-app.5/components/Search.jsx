function Search(props) {
    return <form onSubmit={event => {
        event.preventDefault()

        var query = event.target.query.value

        props.onQuery(query)
    }}>
        <input type="text" name="query" placeholder="criteria" />
        <button>Search</button>
    </form>
}