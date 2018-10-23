import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Game from "./Game";
import NewGame from "./NewGame";
import Credits from "./Credits";
import { Link } from "react-router-dom";
import "./HomeScreen.css";

const mapStateToProps = function(state, props) {
  return {};
};

const mapDispatchToProps = dispatch => ({});

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
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
