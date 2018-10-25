import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "./Game";
import NewGame from "./NewGame";
import Credits from "./Credits";
import { Link } from "react-router-dom";
import "./style/HomeScreen.css";
import NavBar from "./NavBar.js";
// import ModalRoot from "./componets/ModalRoot.js";

const mapStateToProps = function(state, props) {
  return {};
};

// const mapDispatchToProps = dispatch => ({
//   hideModal: () => dispatch(hideModal()),
//   showModal: (modalProps, modalType) => {
//     dispatch(showModal({ modalProps, modalType }));
//   }
// });

class HomeScreen extends Component {
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
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default HomeScreen;
