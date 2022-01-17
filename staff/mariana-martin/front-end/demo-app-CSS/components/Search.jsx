function Search(props) {
    return <form onSubmit={event => {  //Evento  es un parámetro que recible el callback
        event.preventDefault() //previene que intente navegar a otra página

        var query = event.target.query.value  //event es objeto y accedemos con el . a la propiedad target que es una referencia al formulario (target donde se ha producido ese evento)
                                                //accedemos a query que apunta al input, accedes al valor de la query
        props.onQuery(query)  //props es un objeto, (las propiedades que tiene un componente) 
                             //y onQuery es una propiedad del props 
    }}>


        <input type="text" name="query" placeholder="criteria" />
                          {/* //cuando presionas se lanza el evento que activa el onSubmit */}
        <button>Search</button> 
    </form>
}