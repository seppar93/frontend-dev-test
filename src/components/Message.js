import React, { Component } from "react";

export default class Message extends Componenet {
  render() {
    return <div className="message">{this.props.message}</div>;
  }
}
