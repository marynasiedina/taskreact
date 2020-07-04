import React, { Component } from "react";
import Person from "../Person/Person";

export default class App extends Component {
  state = {
    name: "Maryna",
    age: 28,
  };

  getYearOlder = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  alert = (name, age) => alert(`${name} is ${age} old`);

  render() {
    return (
      <Person
        name={this.state.name}
        age={this.state.age}
        getYearOlder={this.getYearOlder}
        alert={this.alert}
      />
    );
  }
}
