import "./App.css";
import "./App.css";
//import SerchBar from "./component/SerchBar/SerchBar";
import Form from "./component/Form/Form";
import Navbar from "./component/Navbar/Navbar";
import Pokemones from "./component/Pokemon/Pokemones";
import Principal from "./component/Principal/Principal";
import { Route } from "react-router-dom";
import LandingPage from "./component/Landing/LandingPage";
import Card from "./component/Card/Card";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route exact path="/principal">
        <Navbar />
        <Principal />
      </Route>

      <Route path="/detalle">
        <Pokemones />
      </Route>

      <Route exact path="/principal/:id">
        <Card />
      </Route>

      <Route path="/create">
        <Navbar />
        <Form />
      </Route>
    </div>
  );
}

export default App;
