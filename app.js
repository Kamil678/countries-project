import { renderCountriesList } from "./functions-DOM.js";

const API_URL_ALL = "https://restcountries.com/v3.1/all";

let countries;

fetch(API_URL_ALL)
  .then((response) => response.json())
  .then((countriesRow) => {
    countries = countriesRow.map((country) => {
      return {
        capital: country.capital && country.capital[0],
        population: country.population,
        name: country.name.common,
        region: country.region,
        flagUrl: country.flags.png,
      };
    });
    renderCountriesList(countries);
  });


