import { useState, useEffect } from "react";
import Nav from "./Nav";
import Register from "./Register";
import Login from "./Login";
import Forecast from "./Forecast";
import Search from "./Search";
import Land from "./Land";
import Favorites from "./Favorites";
import Cart from "./Cart";

import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import retrieveUser from "../logic/retrieve-user.js";
import Details from "./Details";

function App() {
  const [view, setView] = useState(sessionStorage.token ? "home" : "land");
  const [token, setToken] = useState(
    sessionStorage.token ? sessionStorage.token : null
  );
  const [city, setCity] = useState(null);
  const [username, setUsername] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [search, setSearch] = useSearchParam()
  const [query, setQuery] = useState(search.get('q'));
  const navigate = useNavigate()


  const goBack = () =>{ setView(sessionStorage.token ? "home" : "land");
  sessionStorage.token ? navigate('/') :navigate('/login')
}
  const goLogin = () => {
    setView("login");
    navigate('/login')
  };
  const goHome = () => {
    setView("home");
    navigate('/search')
  };
  const goFavorites = () => {
    setView("favs");
    navigate('/favs')
  };
  const goRegister = () => {
    setView("register");
    navigate('/register')
  };

  const logout = () => {
    delete sessionStorage.token;
    setView("land");
    setCity(null);
    setToken(null);
    navigate('/')
  };
  const showCart = () => {
    setView("cart");
    navigate('/cart')
  };
  const showResults = query => {
    setQuery(query)
    navigate(`search?q=${query}`)
  }
  const showDetail = vehicle =>{
    navigate(`vehicles/${vehicle.id}`)
  }

  const setRegister = (_token, _username, _city) => {
    setView("home");
    setToken(_token);
    setUsername(_username);
    setCity(_city);
    navigate('/search')
  };

  const setLogin = (_token, _username, _city) => {
    setView("home");
    setToken(_token);
    setUsername(_username);
    setCity(_city);
    navigate('/search')
  };

  useEffect(() => {
    //logger.debug("APP => componentDidMount " + view);
    if (token)
      try {
        retrieveUser(token, (error, user) => {
          if (error) {
            setFeedback(error.message);

            delete sessionStorage.token;
            logout();
            return;
          }

          const { username, city } = user;
          setUsername(username);
          setCity(city ? city : "this user has no city assigned");
        });
      } catch (error) {
        delete sessionStorage.token;
        setFeedback(error.message);
      }
  });

  return (
    <div>
      <Nav
        loged={token ? true : false}
        handleBack={goBack}
        onClickLogin={goLogin}
        onLogOut={logout}
        showCart={showCart}
        goHome={goHome}
        goFavorites={goFavorites}
        username={username}
      />
      <Routes>
        <Route path="/" element={token?  <Search token={token} /> : <Navigate to="login" />} />
        <Route
          path="/login"
          element={token? <Navigate to="seacrh"  /> :<Login onClickRegister={goRegister} onLoggedIn={setLogin} />}
        />
        <Route
          path="/register"
          element={<Register onClickLogin={goLogin} onRegistered={setRegister} />}
        />
        <Route
          path="/search"
          element={token? <Search token={token} onQueryChange={showResults}/> : <Navigate to="login" /> }
        />
        <Route
          path="/cart"
          element={<Cart onItemClick={showDetail}/>}
        />
        <Route
          path="/favs"
          element={<Favorites onItemClick={showDetail}/>
          }
        />
         <Route
          path="/vehicles/:vehicleId"
          element={<Details />
          }
        />

        {/*  <Route path="*" element={token? <Home token={token} onLoggedOut={logout} /> : <Navigate to="login" />} />
        <Route path="login" element={!token ? <Login onRegisterClick={goToRegister} onLoggedIn={goToHome} /> : <Navigate to="/" />} />
        <Route path="register" element={!token ? (view !== 'register-success' ? <Register onLoginClick={goToLogin} onRegistered={goToRegisterSuccess} /> : <RegisterSuccess onLoginClick={goToLogin} />) : <Navigate to="/" />} />
     */}
      </Routes>
    </div>

    /* <div>
      <Nav
        loged={city ? true : false}
        handleBack={goBack}
        onClickLogin={goLogin}
        onLogOut={logout}
        showCart={showCart}
        goHome={goHome}
        goFavorites={goFavorites}
        username={username}
      />

      {view === "land" ? (
        <Land onClickLogin={goLogin} onClickRegister={goRegister} />
      ) : view === "register" ? (
        <Register onClickLogin={goLogin} onRegistered={setRegister} />
      ) : view === "login" ? (
        <Login onClickRegister={goRegister} onLoggedIn={setLogin} />
      ) : view === "home" ? (
        <div className="home-container">
          <Search token={token} />
          <Forecast city={city} />
        </div>
      ) : view === "favs" ? (
        <Favorites />
      ) : view === "cart" ? (
        <Cart />
      ) : (
        <h3>Something went wrong</h3>
      )}
    </div> */
  );
}

export default App;
