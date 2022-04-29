function Search({onQueryChange, query}){
    const submit = event =>{
        event.preventDefault()
        const query = event.target.query.value
        onQueryChange(query)
    }
    
    return <form className='search__form' onSubmit={submit}>
        <input className='search__query' type="text" name="query" placeholder="criteria" defaultValue={query}/>
        <button className='search__btn'>Search</button>
    </form>
}

export default Search