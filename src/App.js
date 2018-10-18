import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store/Store.js";
import GameState from "./containers/GameState.js";
import { Provider } from "react-redux";

import "./App.css";

const mapStateToProps = function(state, props) {
  return {};
};

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     board: Array(9).fill(null),
  //     player: "X"
  //   };
  // }

  // handleClick(index) {
  //   let newBoard = this.state.board;

  //   if (this.state.board[index] === null) {
  //     newBoard[index] = this.state.player;
  //     this.setState({
  //       board: newBoard,
  //       player: this.state.player === "X" ? "O" : "X"
  //     });
  //     console.log(this.state.board);

  //     console.log(index);
  //   }
  // }
  render() {
    return (
      // const Box = this.state.board.map((box, index) => (
      //   <div className="box" key={index} onClick={e => this.handleClick(index)}>
      //     {box}
      //   </div>
      // ));
      // return (
      //   <div className="container">
      //     <h1>Tic Tac Toe </h1>
      //     <div className="board">
      //       {Box}
      //       {/* <div className="box"> X </div>
      //       <div className="box"> X </div>
      //       <div className="box"> X </div>
      //       <div className="box"> X </div>
      //       <div className="box"> X </div>
      //       <div className="box"> X </div>
      //       <div className="box"> X </div>
      //       <div className="box"> X </div>
      //       <div className="box"> X </div> */}
      //     </div>
      //   </div>
      // );
      <Provider store={store}>
        <GameState player="X" />
      </Provider>
    );
  }
}

// export default App;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
