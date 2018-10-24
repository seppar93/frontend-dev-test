import React, { Component } from "react";
import axios from "axios";
import "./Credits.css";

export default class Credits extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get("http://api.tvmaze.com/people/1/castcredits").then(response => {
      console.log(response.data[0]._links.character.href);
      const links = response.data.map(person => person._links.character.href);
      const namesPromises = links.map(link =>
        axios.get(link).then(response => response.data.name)
      );
      Promise.all(namesPromises).then(names =>
        this.setState({
          persons: names
        })
      );
    });
  }

  render() {
    return (
      <div>
        <img className="heading-primary" src={require("../assets/logo.png")} />
        <h3>Credits</h3>
        <ul className="person">
          {this.state.persons.map(person => (
            <li className="indavidual" key={person}>
              {person}
            </li>
          ))}
        </ul>
      </div>
    );

    // <h1>Test</h1>
  }
}
