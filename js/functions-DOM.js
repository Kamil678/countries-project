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

const createDetailButton = (text, link) => {
  const anachorBtn = document.createElement("a");
  anachorBtn.innerText = text;
  anachorBtn.classList.add("detail-button");
  anachorBtn.href = link;

  return anachorBtn;
};

const createBorderCountriesContainer = (country) => {
  const borderCountriesContainer = document.createElement("div");
  borderCountriesContainer.classList.add("country-borders");

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

const createDetailElement = (country) => {
  const detailContainerElement = document.createElement("div");
  detailContainerElement.classList.add("country-details");

  const countryFlagElement = createFlagElement(country);
  countryFlagElement.classList.add("country-flag");

  const countryInfoContainer = document.createElement("div");
  countryInfoContainer.classList.add("country-info");

  const detailNameElement = document.createElement("h2");
  detailNameElement.innerText = country.name;

  const countryInfoTextContainer = document.createElement("div");
  countryInfoTextContainer.classList.add("main-info");

  const leftColumnContainer = document.createElement("div");
  leftColumnContainer.classList.add("left-column");

  const rightColumnContainer = document.createElement("div");
  rightColumnContainer.classList.add("right-column");

  detailContainerElement.appendChild(countryFlagElement);

  leftColumnContainer.appendChild(detailNameElement);
  leftColumnContainer.appendChild(
    createCountryInfoElement("Native name", country.nativeName)
  );
  leftColumnContainer.appendChild(
    createCountryInfoElement("Population", country.population)
  );
  leftColumnContainer.appendChild(
    createCountryInfoElement("Region", country.region)
  );
  leftColumnContainer.appendChild(
    createCountryInfoElement("Sub Region", country.subregion)
  );
  leftColumnContainer.appendChild(
    createCountryInfoElement("Capital", country.capital)
  );

  rightColumnContainer.appendChild(
    createCountryInfoElement("Top Level Domain", country.tld)
  );
  rightColumnContainer.appendChild(
    createCountryInfoElement("Currencies", country.currencies)
  );
  rightColumnContainer.appendChild(
    createCountryInfoElement("Languages", country.languages)
  );

  countryInfoTextContainer.appendChild(leftColumnContainer);
  countryInfoTextContainer.appendChild(rightColumnContainer);

  countryInfoContainer.appendChild(countryInfoTextContainer);

  if (country.borders && country.borders.length > 0) {
    countryInfoContainer.appendChild(createBorderCountriesContainer(country));
  }
  detailContainerElement.appendChild(countryInfoContainer);

  return detailContainerElement;
};

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createCountries(countries));
};

console.log(window.location)

export const renderCountryDetails = (country) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createDetailButton("Back", window.location.pathname));
  rootElement.appendChild(createDetailElement(country));
  /*if (country.borders && country.borders.length > 0) {
    rootElement.appendChild(createBorderCountriesContainer(country));
  }*/
};