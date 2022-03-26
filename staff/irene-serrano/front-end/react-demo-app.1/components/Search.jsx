class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  UNSAFE_componentDidMount() {
    logger.debug("SEARCH => ComponenetDidMount");
    console.log(this.state.query + 'did mount');
  
  }

  render() {
    return (
      <div className="search panel vertical-cont">
        <h2>What are you looking for?</h2>
        <div className="search-panel ">
          <form
            className="search-form horizontal-cont"
            onSubmit={(event) => {
              event.preventDefault();
              const query = event.target.query.value;
             
              this.setState({ query })
           

              try {
                searchVehicles(
                 this.props.token,
                  query,
                  (error, vehicles) => {
                    if (error) return console.error(error.message);
                    else {
                      
                      this.setState({ vehicles });
      
                    }
                  }
                );
              } catch (error) {
                let resultCont = document.querySelector('.search-results');
                resultCont.classList.add('error','capitalize')
                resultCont.innerText = error.message
                console.error(error.message);
              }
            }}
          >
            <input type="text" name="query" />
            <button>🔎</button>
          </form>
        </div>
        <div className="search-results ">
          {this.state.query === null? <h3>Please, write something</h3> :
          
          this.state.query && <Results query={this.state.query} />}
        </div>
      </div>
    );
  }
}
