const createCountriesItemElement = (country) => {
  const countryElement = document.createElement("li");
  return countryElement;
};

const createCountries = (countries) => {
  const listCountries = document.createElement("ul");
  countries.forEach((country) => {
    listCountries.appendChild(createCountriesItemElement(country));
  });
  return listCountries;
};

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.appendChild(createCountries(countries));
};
