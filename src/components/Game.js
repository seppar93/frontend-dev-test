import React, { Component } from "react";
import Board from "./Board";

class Game extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      board: [[null, null, null], [null, null, null], [null, null, null]],
      player: "X"
    };
  }
  handleClick = (row, col) => {
    let newBoard = this.state.board;
    newBoard[row][col] = this.state.player;

    this.setState({
      board: newBoard,
      player: this.state.player === "X" ? "O" : "X"
    });
  };
  render() {
    return (
      <Board
        rows={this.state.board}
        onClick={this.handleClick}
        player={"X"}
        newBoard={this.state.player}
      />
    );
  }
  // render() {
  //   const Box = this.state.board.map((row, rowIndex) => (
  //     <div className="row" key={rowIndex}>
  //       {row.map((cell, col) => (
  //         <div
  //           className="box"
  //           key={col}
  //           onClick={e => this.handleClick(rowIndex, col)}
  //         >
  //           {row[col]}
  //         </div>
  //       ))}
  //     </div>
  //   ));

  //   return (
  //     <div className="container">
  //       <div className="board">{Box}</div>
  //     </div>
  //   );
  // }
}

export default Game;
