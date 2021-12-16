function Search(props){
    return <form onSubmit={event =>{
        event.preventDefault()

        var query = event.target.query.value

        props.onQueryChange(query)

    }}>

        <input type="text" name="query" placeholder="Buscar vehiculos"/>
        <button>Buscar</button>

    </form>
}