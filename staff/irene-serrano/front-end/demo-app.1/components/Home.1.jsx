class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      vehicles: []
    };
  }

  componentDidMount() {
    try {
      retrieveUser(this.props.token, (error, user) => {
        if (error) return alert(error.message);
        this.setState({ name: user.name });
      });
    } catch (error) {
      alert(error.message);
    }
  }




  render() {
    if (this.state.name) {
      console.log(this.state.name);
      return <h1>Hello, {this.state.name ? this.state.name : "World"}!</h1>;
    } else return null;





  }
}
