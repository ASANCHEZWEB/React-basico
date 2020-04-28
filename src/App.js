import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const formatName = (user) => {
      return `${user.firstName} ${user.lastName}`;
    };

    const user = {
      firstName: "benito",
      lastName: "camelas",
      avatarUrl:
        "https://cutt.ly/vys9DCV",
    };

    const displayAvartar = (user) => {
      return <img src={user.avatarUrl} />;
    };
    const element = <h2>Hello, {formatName(user)}!</h2>;
    return (
      <div className="App">
        <h1> Hello user! </h1>
        {element}
        {displayAvartar(user)}
      </div>
    );
  }
}

export default App;
