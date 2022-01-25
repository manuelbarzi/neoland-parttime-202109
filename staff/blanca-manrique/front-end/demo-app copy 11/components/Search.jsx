function Search(props){
    const submit = event =>{
        event.preventDefault()

        var query = event.target.query.value
        props.onQueryChange(query)
    }
    
    return <form className='search__form' onSubmit={submit}>
        <input className='search__query' type="text" name="query" placeholder="criteria" defaultValue={props.query}/>
        <button className='search__btn'>Search</button>
    </form>
}