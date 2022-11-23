import "./App.css";
import "./App.css";
import Form from "./component/Form/Form";
import Navbar from "./component/Navbar/Navbar";
import Pokemones from "./component/Pokemon/Pokemones";
import Principal from "./component/Principal/Principal";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./component/Landing/LandingPage";
import Card from "./component/Card/Card";
import About from "./component/About/About";
import NotFount from "./component/notFound/notFound.jsx"
function App() {
  return (
    <div className="App">
      <Switch> 

      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route exact path="/principal">
        <Navbar />
        <Principal />
      </Route>

      <Route exact path="/detalle">
        <Pokemones />
      </Route>

      <Route exact path="/principal/:id">
        <Card />
      </Route>

      <Route exact path="/create">
        <Navbar />
        <Form />
      </Route>

      <Route exact path="/about">
        <Navbar />
        <About />     
      </Route>

    <Route  path ="/*">
         <NotFount />
    </Route>
        </Switch>
    </div>
  );
}

export default App;
