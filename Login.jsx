import React, { Component } from "react";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }
  render() {
    return (
      <div className="login col-lg-9 pageLogin">
        <h5 className="m-1 p-2 border-bottom textLoginStyle-2">Login</h5>
        <div className="form-group form-row">
          <label
            htmlFor="email"
            className="col-sm-2 col-form-label textLoginStyle"
          >
            E-mail
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="E-mail Id"
              //value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group form-row">
          <label
            htmlFor="password"
            className="col-sm-2 col-form-label textLoginStyle"
          >
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              //value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
        </div>
        <br />

        <div className="lineCenter">
          {this.state.message}

          <button
            type="submit"
            className="col-lg-0 btn btn-primary pageLogin-2"
            onClick={this.onSubmit}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
  onClick = () => {
    console.log("clicked");
  };
  onSubmit = () => {
    console.log("submitted");
    if (
      this.state.email === "test@test.com" &&
      this.state.password === "test123"
    ) {
      this.setState({
        message: (
          <span className="text-success displayMessage">
            "Login Successful"
          </span>
        ),
      });
    } else {
      this.setState({
        message: (
          <span className="text-danger displayMessage">"Login Failed"</span>
        ),
      });
    }
    // this.props.history.push("/");
  };
}
