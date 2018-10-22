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
  handleClick(x, y) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = cloneNestedArray(current.squares.slice());
    const highLights = this.state.highLights;

    if (highLights.length > 0 || squares[x][y]) {
      return;
    }

    squares[x][y] = this.state.xIsNext ? "X" : "O";
    const checked = { x: x + 1, y: y + 1 };

    const winner = calculateWinner(squares);

    if (winner) {
      this.updateHighLights(winner);
    }

    this.setState({
      history: history.concat([
        {
          squares,
          checked
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
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
