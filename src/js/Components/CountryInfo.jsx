import React from "react";
export class CountryInfo extends React.Component {
  formatNumber = num => {
    const number = num;
    let counter = 1;
    let result = [];
    const numberArray = number.toString().split("");
    for (let i = numberArray.length - 1; i >= 0; i--) {
      result.push(numberArray[i]);
      if (counter % 3 === 0 && i !== 0) {
        result.push(".");
      }
      counter++;
    }
    result.reverse().join();
    return result;
  };

  render() {
    const { countryInfo } = this.props;
    const area = this.formatNumber(countryInfo[0].area);
    const population = this.formatNumber(countryInfo[0].population);
    return (
      <div className="countryinfo">
        <div className="countryinfo__left">
          <div className="countryinfo__info countryinfo__info__left ">
            <h2 className="countryinfo__header countryinfo__info__left">
              country
            </h2>
            <p className="countryinfo__text countryinfo__info__left">
              {countryInfo[0].name}
            </p>
          </div>
          <div className="countryinfo__flag">
            <img className="countryinfo__img" src={countryInfo[0].flag} />
          </div>
        </div>
        <div className="countryinfo__right">
          <div className="countryinfo__info">
            <h2 className="countryinfo__header">capital</h2>
            <p className="countryinfo__text">{countryInfo[0].capital}</p>
          </div>
          <div className="countryinfo__info">
            <h2 className="countryinfo__header">subregion</h2>
            <p className="countryinfo__text">{countryInfo[0].subregion}</p>
          </div>
          <div className="countryinfo__info">
            <h2 className="countryinfo__header">population</h2>
            <p className="countryinfo__text">{population}</p>
          </div>
          <div className="countryinfo__info">
            <h2 className="countryinfo__header">
              area km<sup>2</sup>
            </h2>
            <p className="countryinfo__text">{area}</p>
          </div>
          <div className="countryinfo__info">
            <h2 className="countryinfo__header">currencies</h2>
            <p className="countryinfo__text">
              {countryInfo[0].currencies[0].name}-
              {countryInfo[0].currencies[0].symbol}{" "}
            </p>
          </div>
          <div className="countryinfo__info">
            <h2 className="countryinfo__header">language</h2>
            <p className="countryinfo__text">
              {countryInfo[0].languages[0].name}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
