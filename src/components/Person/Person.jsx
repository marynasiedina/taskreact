import React, { Component } from "react";
import Me from "../Me/Me";

export default class Person extends Component {
  render() {
    let { name, age, getYearOlder, alert } = this.props;
    return (
      <Me name={name} age={age} getYearOlder={getYearOlder} alert={alert} />
    );
  }
}
