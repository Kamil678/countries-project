export const renderViewDetail = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const countryCode = searchParams.get("country");

  if (!countryCode) {
    backToHomePage();
  }

  const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`;

  fetch(API_URL_DETAIL)
    .then((response) => response.json())
    .then(([country]) => {
      if (!country || country.length === 0) {
        backToHomePage();
      }

      country = {
        capital: country.capital && country.capital[0],
        population: country.population.toLocaleString(),
        name: country.name.common,
        code: country.cioc,
        region: country.region,
        subregion: country.subregion,
        flagUrl: country.flags.png,
        flagAlt: country.flags.alt,
        tld: country.tld[0],
        currencies: country.currencies,
        languages: country.languages,
        borders: country.borders,
      };
      console.log(country);
    });
};

const backToHomePage = () => {
  window.location.href = "/";
};
