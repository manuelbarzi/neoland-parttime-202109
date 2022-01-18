function Search(props){
    return <form className='search__form' onSubmit={event =>{
        event.preventDefault()

        var query = event.target.query.value

        props.onQueryChange(query)
    }}>
        <input className='search__query' type="text" name="query" placeholder="criteria" defaultValue={props.query}/>
        <button className='search__btn'>Search</button>
    </form>
}