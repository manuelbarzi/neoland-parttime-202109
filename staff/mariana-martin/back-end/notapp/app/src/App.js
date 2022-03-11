import logo from './logo.svg';
import './App.css';
//importamos el componentes:
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Llamo al compo Register  */}

      <Register/>
    </div>
  );
}

export default App;
