import React, { Component } from "react";
import Credits from "./Credits";
import "./Person.css";

export default class Person extends Component {
  state = {
    person_links: []
  };

  render() {
    return (
      <React.Fragment>
        <Credits />
      </React.Fragment>
    );
  }
}
