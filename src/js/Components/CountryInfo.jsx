import React from "react";

export class CountryInfo extends React.Component {
  render() {
    const { countryInfo } = this.props;
    let area;
    let population;
    if (countryInfo) {
      population = countryInfo[0].population;
      area = countryInfo[0].area;
    }
    return (
      <section className="country_info">
        <div className="countryinfo_left">
          <div className="info">
            <h2>country</h2>
            <p>{countryInfo[0].name}</p>
          </div>
          <div className="flag">
            <img src={countryInfo[0].flag} />
          </div>
        </div>
        <div className="countryinfo_right">
          <div className="info">
            <h2>capital</h2>
            <p>{countryInfo[0].capital}</p>
          </div>
          <div className="info">
            <h2>subregion</h2>
            <p>{countryInfo[0].subregion}</p>
          </div>
          <div className="info">
            <h2>population</h2>
            <p>{population}</p>
          </div>
          <div className="info">
            <h2>
              area km<sup>2</sup>
            </h2>
            <p>{area}</p>
          </div>
          <div className="info">
            <h2>currencies</h2>
            <p>
              {countryInfo[0].currencies[0].name}-
              {countryInfo[0].currencies[0].symbol}{" "}
            </p>
          </div>
          <div className="info">
            <h2>language</h2>
            <p>{countryInfo[0].languages[0].name}</p>
          </div>
        </div>
      </section>
    );
  }
}
