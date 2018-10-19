// import React from "react";

// class Message extends React.Componenet {
//   render() {
//     return <div className="flashline">{this.props.message}</div>;
//   }
// }

// export default Message;

import React from "react";

class Message extends React.Component {
  render() {
    return <div className="message">{this.props.message}</div>;
  }
}

export default Message;
