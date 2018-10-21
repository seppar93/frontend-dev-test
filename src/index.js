import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/HomeScreen.js";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore from "./store";
import HomeScreen from "./components/HomeScreen.js";
import Credits from "./components/Credits";
import Game from "./components/Game";
import NewGame from "./components/NewGame";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Route path="/" component={HomeScreen}>
        <Route path="/new-game" component={NewGame} />
      </Route>
      <Route path="/credits" component={Credits} />
      <Route path="/game" component={Game} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
