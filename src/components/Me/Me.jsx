import React, { Component } from "react";

export default class Me extends Component {
  render() {
    let { name, age, getYearOlder, alert } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <button onClick={() => alert(name, age)}>Показать name и age</button>
        <button onClick={() => getYearOlder(age)}>Состарить</button>
      </div>
    );
  }
}
