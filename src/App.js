import React, { Component } from "react";
import "./App.css";
import User from "../components/User";
import ReactPlayer from 'react-player';
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
        <User firstName="Harper"/>
        <User firstName="Ana"/>

        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

        // see the new props!
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
        />
      </div>
    );
  }
}

export default App;
