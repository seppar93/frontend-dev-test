import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Game from "./Game";
import NewGame from "./NewGame";
import Credits from "./Credits";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
import NavBar from "./NavBar.js";

const mapStateToProps = function(state, props) {
  return {};
};

const mapDispatchToProps = dispatch => ({});

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };

    this.toggleFragment = this.toggleFragment.bind(this);
  }

  toggleFragment = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    return (
      <React.Fragment>
        <img className="heading-primary" src={require("../assets/logo.png")} />
        <div className="content">
          <div className="header__text-box">
            <Link
              onClick={this.toggleFragment}
              className="btn btn--white btn--animated"
              to={"/credits"}
            >
              Credits
            </Link>
            <Link
              onClick={this.toggleFragment}
              className="btn btn--white btn--animated"
              to={"/game"}
            >
              Game
            </Link>
            <Link
              onClick={this.toggleFragment}
              className="btn btn--white btn--animated"
              to={"/new-game"}
            >
              New Game
            </Link>
          </div>
        </div>
        <br /> <br />
        {this.state.show}
        {this.props.children}
      </React.Fragment>
    );
  }
}

// class Box extends Component {
//   render() {
//     return
//   }
// }

export default HomeScreen;
