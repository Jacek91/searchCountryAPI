import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";
import { Countries } from "../js/Components/Countries.jsx";
import { Navigation } from "../js/Components/Navigation.jsx";

document.addEventListener("DOMContentLoaded", function() {
  class App extends React.Component {
    render() {
      return (
        <div>
          <Navigation />
          <Countries />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById("app"));
});
