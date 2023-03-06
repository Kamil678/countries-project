const createCountryInfoElement = (titleLabel, labelValue) => {
  const countryInfoElement = document.createElement("div");
  countryInfoElement.classList.add("info");
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
  imgElement.alt = country.flagAlt;

  imgContainer.appendChild(imgElement);

  return imgContainer;
};

const createCountriesItemElement = (country) => {
  const countryElement = document.createElement("li");
  const countryElementDiv = document.createElement("div");
  countryElementDiv.classList.add("countries-info");

  const countryNameElement = document.createElement("h3");
  countryNameElement.innerText = country.name;

  countryElement.appendChild(createFlagElement(country));
  countryElementDiv.appendChild(countryNameElement);
  countryElementDiv.appendChild(
    createCountryInfoElement("Population", country.population)
  );
  countryElementDiv.appendChild(
    createCountryInfoElement("Region", country.region)
  );
  countryElementDiv.appendChild(
    createCountryInfoElement("Capital", country.capital)
  );

  countryElement.appendChild(countryElementDiv);

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
  rootElement.innerHTML = "";
  rootElement.appendChild(createCountries(countries));
};
