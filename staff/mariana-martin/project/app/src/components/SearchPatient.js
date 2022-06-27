function SearchPatient(props){

    const submit = event => {
        event.preventDefault()

        const { target : {query: { value: query }}} = event

        props.onQueryChange(query)
    }
    
    return <form onSubmit={submit}>
    <input type="text" name="query" placeholder="patient"  />
    <button>Search</button>
</form>
}

export default SearchPatient