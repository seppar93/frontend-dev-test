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

class HomeScreen extends Component {
  render() {
    return (
      // <React.Fragment>
      <div>
        <div className="content">
          <div className="header__text-box">
            <img
              className="heading-primary"
              src={require("../assets/logo.png")}
            />
            <Link className="btn btn--white btn--animated" to={"/credits"}>
              Credits
            </Link>
            <Link className="btn btn--white btn--animated" to={"/game"}>
              Game
            </Link>
            <Link className="btn btn--white btn--animated" to={"/new-game"}>
              NewGame
            </Link>
          </div>
        </div>

        {/* {this.props.children} */}
        {/* </React.Fragment> */}
      </div>
    );
  }
}

export default HomeScreen;

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
