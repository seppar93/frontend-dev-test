import React, { Component } from "react";
// import "./NewGame.css";


class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state {
      player1Name: "",
      player2Name: ""
    }
  }
  changeHandler(event) {
    console.log(event);
    
    this.setState({
      player1Name: firstInput,
      player2Name: secoundInput

    })
  }
  render() {
    return (
      <form className="user-name-input">
      <label>
        Player1:
        <input type="text" name='player1Name' onChange={this.changeHandler}></input>
      </label>
      <label>
        Player2:
        <input type="text" name='player2Name' onChange={this.changeHandler}></input>
      </label>
      
      </form>
    );
  }
}

// export default App;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
