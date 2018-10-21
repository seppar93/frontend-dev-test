import React, { Component } from "react";
import Credits from "./Credits";

export default class Person extends Component {
  state = {
    person_links: []
  };

  render() {
    return (
      <React.Fragment>
        <Credits />
      </React.Fragment>
      // <h1>Test</h1>
    );
  }
}
