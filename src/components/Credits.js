import React, { Component } from "react";

class Credits extends Component {
  render() {
    return (
      <div onClick={this.props.onPress} className="cell">
        {this.props.state}
      </div>
    );
  }
}
export default Cell;
