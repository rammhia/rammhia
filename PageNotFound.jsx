import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class PageNotFound extends Component {
  render() {
    return (
      <div className="pageNotFound">
        <h5 className="centered">
          <p className="textCentered">Sorry! The page does not exist.</p>
        </h5>
        <Link to="/Login">Go back to Login Page</Link>
      </div>
    );
  }
}
