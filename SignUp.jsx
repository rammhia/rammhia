import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SignUp extends Component {
  render() {
    return (
      <div className="signUp">
        <h5>
          <p className="textCenteredHead">Register Here</p>
        </h5>
        <Link to="/Login">Go back to Login Page</Link>
        <div className="form-body pageContentAlignment-2">
          <div className="username">
            <label className="form__label required" for="firstName">
              First Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="lastName">
            <label className="form__label" for="lastName">
              Last Name{" "}
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="LastName"
            />
          </div>
          <div className="email">
            <label className="form__label" for="email">
              E-mail{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="E-mail Id"
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <br />
        <div className="lineCenter">
          <button>Submit</button>
        </div>
      </div>
    );
  }

  //componentDidMount() {
  ///document.body.style.backgroundColor = "#f9efed";
  //}
}
