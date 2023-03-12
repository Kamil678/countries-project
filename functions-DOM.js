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

  detailContainerElement.appendChild(countryFlagElement);
  detailContainerElement.appendChild(detailNameElement);
  detailContainerElement.appendChild(
    createCountryInfoElement("Native name", country.nativeName)
  );
  detailContainerElement.appendChild(
    createCountryInfoElement("Population", country.population)
  );
  detailContainerElement.appendChild(
    createCountryInfoElement("Region", country.region)
  );
  detailContainerElement.appendChild(
    createCountryInfoElement("Sub Region", country.subregion)
  );
  detailContainerElement.appendChild(
    createCountryInfoElement("Capital", country.capital)
  );
  detailContainerElement.appendChild(
    createCountryInfoElement("Top Level Domain", country.tld)
  );
  detailContainerElement.appendChild(
    createCountryInfoElement("Currencies", country.currencies)
  );
  detailContainerElement.appendChild(
    createCountryInfoElement("Languages", country.languages)
  );

  return detailContainerElement;
};

const createDetailButton = (text, link) => {
  const anachorBtn = document.createElement("a");
  anachorBtn.innerText = text;
  anachorBtn.classList.add("detail-button");
  anachorBtn.href = link;

  return anachorBtn;
};

const createBorderCountriesContainer = (country) => {
  const borderCountriesContainer = document.createElement("div");

  const titleElement = document.createElement("p");
  titleElement.innerText = "Border Countries: ";

  borderCountriesContainer.appendChild(titleElement);

  country.borders.forEach((border) => {
    borderCountriesContainer.appendChild(
      createDetailButton(border, `?country=${border}`)
    );
  });

  return borderCountriesContainer;
};

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createCountries(countries));
};

export const renderCountryDetails = (country) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createDetailButton("Back", "/"));
  rootElement.appendChild(createDetailElement(country));
  if (country.borders)
    rootElement.appendChild(createBorderCountriesContainer(country));
};
