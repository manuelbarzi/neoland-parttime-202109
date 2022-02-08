function Search(props) {

    const submit = event => {
        event.preventDefault()

        const query = event.target.query.value

        props.onQueryChange(query)
    }


    return <form onSubmit={submit}>
        <input type="text" name="query" placeholder="criteria" defaultValue={props.query} />
        <button className="container__btn--search">Search</button>
    </form>
}

export default Search