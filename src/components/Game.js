import React, { Component } from "react";
import Board from "./Board";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super();
    this.state = {
      history: [
        {
          squares: [[null, null, null], [null, null, null], [null, null, null]],
          checked: {
            x: 0,
            y: 0
          }
        }
      ],
      highLights: [],
      stepNumber: 0,
      xIsNext: true
    };
  }
  checkWinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ];
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let board = this.state.board;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert("you won");
        winner: this.state.player;
      }
    }
  }

  handleClick = (row, col) => {
    let newBoard = this.state.board;
    // newBoard[row][col] = this.state.player;
    if (this.state.board[index] === null && !this.state.winner) {
      if (this.state.board[row][col] === null) {
        newBoard[row][col] = this.state.player;
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        });
      }
      this.checkWinner();
    }
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
