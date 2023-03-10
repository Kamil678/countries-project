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

  const anachorElement = document.createElement("a");
  anachorElement.href = `?country=${country.code}`;

  const countryElementDiv = document.createElement("div");
  countryElementDiv.classList.add("countries-info");

  const countryNameElement = document.createElement("h3");
  countryNameElement.innerText = country.name;

  anachorElement.appendChild(createFlagElement(country));
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

  anachorElement.appendChild(countryElementDiv);

  countryElement.appendChild(anachorElement);
  return countryElement;
};

const createCountries = (countries) => {
  const listCountries = document.createElement("ul");
  listCountries.classList.add("all-countries");
  countries.forEach((country) => {
    listCountries.appendChild(createCountriesItemElement(country));
  });
  return listCountries;
};

const createDetailElement = (country) => {
  const detailContainerElement = document.createElement("div");
  const countryFlagElement = createFlagElement(country);
  const detailNameElement = document.createElement("h2");
  detailNameElement.innerText = country.name;
};

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createCountries(countries));
};

export const renderCountryDetails = (country) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createDetailElement(country));
};
