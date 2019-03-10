import React from "react";
export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
      propositionsList: []
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
    const countries = this.props.countriesData;
    let countriesProposition = countries
      .filter(element => {
        return element.country[0].name
          .toLowerCase()
          .includes(searchWord.toLowerCase());
      })
      .map(element => {
        return element.country[0].name;
      });

    this.createPropositionList(countriesProposition, searchWord);
  };

  createPropositionList = (countries, searchWord) => {
    let propositions =
      countries.length >= 1 ? (
        countries.map((country, id) => {
          let word = searchWord.toLowerCase();
          let startIndex = country.toLowerCase().indexOf(word);
          let endIndex = word.length + startIndex;
          let begining = country.slice(0, startIndex);
          let middle = country.slice(startIndex, endIndex);
          let end = country.slice(word.length + startIndex);
          return (
            <li
              key={country + id}
              onClick={e => this.handleOnChose(e, country)}
              className="searchbar__list--item"
            >
              {begining}
              <span style={{ fontWeight: "bold", fontFamily: "inherit" }}>
                {middle}
              </span>
              {end}
            </li>
          );
        })
      ) : (
          <li className="searchbar__list--item">This country doesn't exist.</li>
        );

    this.setState({
      propositionsList: propositions
    });
  };

  handleOnChose = (event, country) => {
    event.preventDefault();
    const { handleChosenCountry, scrollToMap } = this.props;

    handleChosenCountry(country);
    scrollToMap();

    this.setState({
      searchWord: ""
    });
  };

  render() {
    const { searchWord, propositionsList } = this.state;
    return (
      <section className="searchbar">
        <input
          type="text"
          className="searchbar__input"
          value={searchWord}
          onChange={this.handlSearchOnChange}
          tabIndex="0"
          placeholder="Type Country name in english..."
        />
        <ul
          style={{ display: searchWord.length >= 3 ? "block" : "none" }}
          className="searchbar__list"
          ref="propList"
        >
          {propositionsList}
        </ul>
      </section>
    );
  }
}
