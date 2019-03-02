import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: ""
    };
  }

  handlSearchOnChange = event => {
    let word = event.target.value;
    this.setState({
      searchWord: word
    });

    // word.length >= 3 ? this.filterCountriesData(word) : null;
  };

  render() {
    const { searchWord } = this.state;
    return (
      <section className="searchbar">
        <input
          type="text"
          className="searchbar_input"
          value={searchWord}
          onChange={this.handlSearchOnChange}
          tabIndex="0"
          placeholder="Type Country name in english"
        />
        <ul style={{ display: "block" }} className="searchbar_list" />
      </section>
    );
  }
}
