import React from "react";
import { CountryInfo } from "./CountryInfo.jsx";
import { SearchBar } from "./SearchBar.jsx";
import { SimpleMap } from "./Map.jsx";

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
        .filter(element => {
          return element.country[0].name.includes(chosenCountry);
        })
        .map(element => {
          return element.country[0];
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
    const center = countryDataToDisplay
      ? {
          lat: countryDataToDisplay[0].latlng[0],
          lng: countryDataToDisplay[0].latlng[1]
        }
      : null;
    return (
      <>
        {countriesData ? (
          <SearchBar
            countriesData={countriesData}
            handleChosenCountry={this.handleChosenCountry}
            scrollToMap={this.scrollToMyRef}
          />
        ) : (
          <p>Loading ...</p>
        )}
        {chosenCountry && countryDataToDisplay ? (
          <section className="main">
            <CountryInfo countryInfo={countryDataToDisplay} />
            <div className="map" id="map">
              <SimpleMap centerMap={center} />
            </div>
          </section>
        ) : null}
      </>
    );
  }
}
