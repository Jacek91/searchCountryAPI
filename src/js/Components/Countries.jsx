import React from "react";

export class Countries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countriesData: ""
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
                );
            });

    }

    render() {
        const { countriesData } = this.state;
        let countries;

        if (countriesData.length) {

            countries = countriesData.map((country, index) => (
                <h1 key={index}>
                    {country.country[0].name}
                </h1>
            ));
        }

        return (
            <main className="container">
                {countries}
            </main>
        );
    }
}
