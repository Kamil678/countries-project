import { renderCountriesList } from "./functions-DOM.js";

const API_URL_ALL = "https://restcountries.com/v3.1/all";

let countries;
let query = "";
let currentRegion = "";

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
      (!currentRegion || country.region === currentRegion)
    );
  });

  renderCountriesList(filteredCountries);
};

document.querySelector("#query").addEventListener("input", (e) => {
  query = e.target.value.toLowerCase().trim();
  filterCountriesAndRenderNewList();
});

document.querySelectorAll(".options li").forEach((region) => {
  region.addEventListener("click", (e) => {
    currentRegion = e.target.innerText;
    filterCountriesAndRenderNewList();
  });
});
