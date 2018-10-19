import React, { Component } from "react";

export default class Button extends Componenet {
  render() {
    return (
      <div onClick={this.props.onPress} className="button">
        {this.props.label}
      </div>
    );
  }
}
