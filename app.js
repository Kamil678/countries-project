const API_URL_ALL = "https://restcountries.com/v3.1/all";

fetch(API_URL_ALL)
  .then((response) => response.json())
  .then((data) => console.log(data));
