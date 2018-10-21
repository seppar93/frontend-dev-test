import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Game from "./Game";
import NewGame from "./NewGame";
import Credits from "./Credits";
import { Link } from "react-router-dom";

const mapStateToProps = function(state, props) {
  return {};
};

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="heading">Tic Tac Toe </h1>
        <Link to={"/credits"}>Credits</Link>
        <Link to={"/game"}>Game</Link>
        <Link to={"/new-game"}>NewGame</Link>

        {this.props.children}
      </React.Fragment>
    );
  }
}

export default App;

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
