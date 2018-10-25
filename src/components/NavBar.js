import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "./Game";
import Credits from "./Credits";
import { Link } from "react-router-dom";
import "./style/NavBar.css";

const mapStateToProps = function(state, props) {
  return {};
};

const mapDispatchToProps = dispatch => ({});

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div>
          <img
            className="heading-primary"
            src={require("../assets/logo.png")}
          />
        </div>
      </nav>
    );
  }
}

export default NavBar;

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
