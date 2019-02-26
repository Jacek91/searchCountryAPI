import React from "react";
import ReactDOM from "react-dom";
import '../scss/main.scss'
import { Countries } from "../js/Components/Countries.jsx";

document.addEventListener("DOMContentLoaded", function () {
    class App extends React.Component {
        render() {
            return (
                <div>
                    <Countries />
                </div>
            );
        }
    }

    ReactDOM.render(<App />, document.getElementById("app"));
});

