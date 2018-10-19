import React, { Component } from "react";

export default class Cell extends Componenet {
  render() {
    return (
      <div onClick={this.props.onPress} className="cell">
        {this.props.state}
      </div>
    );
  }
}
