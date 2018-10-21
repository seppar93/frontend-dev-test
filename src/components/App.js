import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Game from "./Game";
import NewGame from "./NewGame";

const mapStateToProps = function(state, props) {
  return {};
};

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="heading">Tic Tac Toe </h1>
        {/* <Game /> */}
        <NewGame />
      </React.Fragment>
    );
  }
}

// export default App;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
