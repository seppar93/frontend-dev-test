import React, { Component } from "react";
import axios from "axios";

export default class PersonList extends Component {
  state = {
    persons: []
  };

  componenetDidMount() {
    axios
      .get("http://api.tvmaze.com/people/1/castcredits")
      .then(response => {
        return axios.get(response.data.character);
      })
      .then(res => {
        console.log("Response", res);
        this.state({ persons: res.data });
      });
  }

  render() {
    return (
      <ul>
        {this.persons.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
