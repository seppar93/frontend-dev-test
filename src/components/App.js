import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Game from "./Game";

const mapStateToProps = function(state, props) {
  return {};
};

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  constructor(props) {
    super(props);
    this.state {
      player1: "",
      player2: ""
    }
  }
  displayName(firstInput, secoundInput) {
    this.setState({
      player1: firstInput,
      player2: secoundInput

    })
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="heading">Tic Tac Toe </h1>
        <Game />
      </React.Fragment>
    );
  }
}

// export default App;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
