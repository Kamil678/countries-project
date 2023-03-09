const regionFilters = document.querySelector(".region-filters");
const selectBtn = document.querySelector(".select-btn");
const selectBtnOptionsUl = document.querySelector(".options");

let regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
let isSelected = false;

const addRegions = (selectedRegion) => {
  regions.forEach((region) => {
    let li = `<li onclick="updateRegion(this)">${region}</li>`;
    selectBtnOptionsUl.insertAdjacentHTML("beforeend", li);
  });
};
addRegions();

const updateRegion = (selectedRegionLi) => {
  if (isSelected) {
    document.querySelector("li.selected").classList.remove("selected");
  }
  regionFilters.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedRegionLi.innerText;
  selectedRegion = selectedRegionLi.innerText;
  selectedRegionLi.classList.add("selected");
  isSelected = true;
};

selectBtn.addEventListener("click", () => {
  regionFilters.classList.toggle("active");
});
