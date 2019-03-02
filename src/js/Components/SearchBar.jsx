import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="searchbar">
        <input
          type="text"
          className="searchbar_input"
          tabIndex="0"
          placeholder="Type Country name in english"
        />
        <ul style={{ display: "block" }} className="searchbar_list" />
      </section>
    );
  }
}
