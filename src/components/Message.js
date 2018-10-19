import React from "react";

class Message extends React.Componenet {
  render() {
    return <div className="flashline">{this.props.message}</div>;
  }
}

export default Message;
