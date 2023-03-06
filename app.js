import { renderCountriesList } from "./functions-DOM.js";

const API_URL_ALL = "https://restcountries.com/v3.1/all";

let countries;
let query = "";
let region = "";

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
        flagAlt: country.flags.alt,
      };
    });
    renderCountriesList(countries);
  });

const filterCountriesAndRenderNewList = () => {
  const filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(query) &&
      (!region || country.region === region)
    );
  });

  renderCountriesList(filteredCountries);
};

document.querySelector("#query").addEventListener("input", (e) => {
  query = e.target.value.toLowerCase().trim();
  filterCountriesAndRenderNewList();
});

document.querySelector("#region").addEventListener("change", (e) => {
  region = e.target.value;
  filterCountriesAndRenderNewList();
});
