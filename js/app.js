import { renderViewDetail } from "./view-detail.js";
import { renderViewHomePage } from "./view-home-page.js";

if (window.location.search.includes("?country=")) {
  document.querySelector(".filters").classList.add("hide-filters");
  renderViewDetail();
} else {
  renderViewHomePage();
}
