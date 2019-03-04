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

    word.length >= 3 ? this.filterCountriesData(word) : null;
  };

  filterCountriesData = searchWord => {
    const countries = this.props.countriesData.slice();
    let countriesProposition = countries
      .filter(e => {
        return e.country[0].name
          .toLowerCase()
          .includes(searchWord.toLowerCase());
      })
      .map(e => {
        return e.country[0].name;
      });

    console.log(countriesProposition);
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
