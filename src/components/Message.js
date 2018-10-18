import React from "react";

class Message extends Componenet {
  render() {
    return (
       <div className="flashline">{this.props.message}</div>;
    );
  }
}

export default Message;