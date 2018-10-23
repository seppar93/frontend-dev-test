import React, { Component } from "react";
import Credits from "./Credits";
import "./Person.css"

export default class Person extends Component {
  state = {
    person_links: []
  };

  render() {
    return (
      <div class="container">
        <div class="interior">
          <a class="btn" href="#open-modal"><i class="fas fa-external-link-alt"></i> Credits</a>
        </div>
      </div>
      <div id="open-modal" class="modal-window">
        <div>
          <a href="#" title="Close" class="modal-close">Close</a>
          <Credits />
          </div>
        </div>









      // <React.Fragment>
      //   <Credits />
      // </React.Fragment>
    );
  }
}
