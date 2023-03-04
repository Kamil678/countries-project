const createCountryInfoElement = (titleLabel, labelValue) => {
  const countryInfoElement = document.createElement("div");
  const countryLabelInfo = document.createElement("p");
  countryLabelInfo.innerText = `${titleLabel}: `;
  const countryLabelValueInfo = document.createElement("span");
  countryLabelValueInfo.innerText = labelValue;

  countryInfoElement.appendChild(countryLabelInfo);
  countryInfoElement.appendChild(countryLabelValueInfo);

  return countryInfoElement;
};

const createFlagElement = (country) => {
  const imgContainer = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.src = country.flagUrl;
  imgElement.width = 160;
  imgElement.height = 98;

  imgContainer.appendChild(imgElement);

  return imgContainer;
};

const createCountriesItemElement = (country) => {
  const countryElement = document.createElement("li");

  const countryNameElement = document.createElement("h3");
  countryNameElement.innerText = country.name;

  countryElement.appendChild(createFlagElement(country));
  countryElement.appendChild(countryNameElement);
  countryElement.appendChild(
    createCountryInfoElement("Population", country.population)
  );
  countryElement.appendChild(
    createCountryInfoElement("Region", country.region)
  );
  countryElement.appendChild(
    createCountryInfoElement("Capital", country.capital)
  );

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
