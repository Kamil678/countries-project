import {
  renderCountriesList,
  renderNoResult
} from "./functions-DOM.js";

export const renderViewHomePage = () => {
  const API_URL_ALL = "https://restcountries.com/v3.1/all?fields=capital,population,name,cca3,region,flags";
  let countries;
  let query = "";
  let currentRegion = "";

  fetch(API_URL_ALL)
    .then((response) => response.json())
    .then((countriesRow) => {
      countries = countriesRow.map((country) => {
        return {
          capital: country.capital && country.capital[0],
          population: country.population.toLocaleString(),
          name: country.name.common,
          code: country.cca3,
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

    if (filteredCountries.length > 0) {
      renderCountriesList(filteredCountries);
    } else {
      renderNoResult()
    }
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
};