import React from "react";
import { CountryInfo } from "./CountryInfo.jsx";
import { SearchBar } from "./SearchBar.jsx";

export class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesData: "",
      chosenCountry: "Poland",
      countryDataToDisplay: ""
    };
  }

  componentDidMount() {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(response => response.json())
      .then(data => {
        const countriesData = data.map(country => {
          return {
            country: [
              {
                name: country.name,
                flag: country.flag,
                latlng: country.latlng,
                capital: country.capital,
                population: country.population,
                area: country.area,
                currencies: country.currencies,
                languages: country.languages,
                subregion: country.subregion
              }
            ]
          };
        });
        this.setState(
          {
            countriesData
          },

          () => {
            const country = this.state.chosenCountry;
            this.getCountryData(country);
          }
        );
      });
  }

  getCountryData = chosenCountry => {
    const { countriesData } = this.state;
    let countryDataToDisplay = [];
    if (countriesData) {
      countryDataToDisplay = countriesData
        .filter(e => {
          return e.country[0].name.includes(chosenCountry);
        })
        .map(e => {
          return e.country[0];
        });
    }

    this.setState({
      countryDataToDisplay
    });
  };

  handleChosenCountry = country => {
    this.setState({
      chosenCountry: country
    });

    this.getCountryData(country);
  };

  render() {
    const { countriesData, chosenCountry, countryDataToDisplay } = this.state;

    // if (countriesData.length) {
    //   countries = countriesData.map((country, index) => (
    //     <h1 key={index}>{country.country[0].name}</h1>
    //   ));
    // }

    return (
      <main className="container">
        {/* {countries} */}
        <div>
          {countriesData ? (
            <SearchBar
              countriesData={countriesData}
              handleChosenCountry={this.handleChosenCountry}
            />
          ) : (
            <p>Loading ...</p>
          )}
          {chosenCountry && countryDataToDisplay.length ? (
            <CountryInfo countryInfo={countryDataToDisplay} />
          ) : null}
        </div>
      </main>
    );
  }
}
