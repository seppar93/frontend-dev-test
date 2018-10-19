import React, { Component } from "react";
import Cell from "../components/Cell.js";
import Button from "../components/Button.js";
import Message from "../components/Message";

export default class TicTacToe extends Componenet {
  render() {
    const game = this;

    return (
      <div>
        <Message message={this.props.message} />
        <div className="gird">
          {this.props.cells.map((value, cell) => (
            <Cell
              key={cell}
              state={value}
              onPress={evt => {
                game.props.onSetCell(cell, this.props.cells, this.props.player);
              }}
            />
          ))}
        </div>
        <div className="panel">
          <Button
            label="Reset"
            onPress={evt => {
              game.props.onReset();
            }}
          />
        </div>
      </div>
    );
  }
}
