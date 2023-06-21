import rendercountry from "../script/loadCountry.js";
import addCountry from "../script/addCountry.js";
const btnChange = document.querySelector(".btnChange");
let inputSearch;
const closeWindow = document.querySelector(".closeWindow");
export const controller = new AbortController();
export const { signal } = controller;

const init = function () {
   rendercountry._initload();
};

init();

export const changeview = function () {
   const selectCountryView = document.querySelector(".select__country");
   selectCountryView.style.display =
      selectCountryView.style.display === "none" ? "block" : "none";
};

btnChange.addEventListener("click", () => {
   changeview();
   const inputSearch = document.getElementById("inputSearch");
   rendercountry._renderChangedCountry();

   inputSearch.addEventListener("input", () => {
      const countryList = document.querySelector(".country__list");

      const countylistItems = document.querySelectorAll("section");

      const searchText = inputSearch.value.toLowerCase();

      countylistItems.forEach((element) => {
         const h3 = element.querySelector("h3").textContent.toLowerCase();
         if (h3.includes(searchText)) {
            element.style.display = "block";
         } else {
            element.style.display = "none";
         }
      });
   });
});

closeWindow.addEventListener("click", () => {
   controller.abort();
   changeview();
});
