import React, { Component } from "react";
import styles from "./Board.css";

class Board extends Component {
  render() {
    const Box = this.props.rows.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((cell, col) => (
          <div
            className="box"
            key={col}
            onClick={e => this.props.onClick(rowIndex, col)}
          >
            {row[col]}
          </div>
        ))}
      </div>
    ));

    return (
      <div className="container">
        <div className="board">{Box}</div>
      </div>
    );
  }
}

export default Board;
