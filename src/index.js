import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import HomeScreen from "./components/HomeScreen.js";
import Credits from "./components/Credits";
import Game from "./components/Game";
import NewGame from "./containers/NewGame";
import Navbar from "./components/NavBar.js";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <AppNavbar /> */}
      <div>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/new-game" component={NewGame} />
        <Route path="/credits" component={Credits} />
        <Route path="/game" component={Game} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
