import React, { Component } from "react";
// import "./NewGame.css";

class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Name: "",
      player2Name: ""
    };
  }
  changeHandler = event => {
    console.log(event.target.name);
    console.log(event.target.value);

    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <form className="user-name-input">
        <label>
          Player1:
          <input
            type="text"
            name="player1Name"
            value={this.state.player1Name}
            onChange={this.changeHandler}
          />
        </label>

        <label>
          Player2:
          <input
            type="text"
            name="player2Name"
            value={this.state.player2Name}
            onChange={this.changeHandler}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// export default App;

export default NewGame;
