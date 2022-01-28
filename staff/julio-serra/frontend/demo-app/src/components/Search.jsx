function Search(props) {
  const submit = event => {
    event.preventDefault();

    const query = event.target.query.value; //parametro event accede a la propiedad target (del formulario), para acceder al valor del input
    props.onQueryChange(query)
    // props.onQuery(query);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="query" placeholder="Encuentra tu coche" />
      <button>Search</button>
    </form>
  );
}

export default Search;
