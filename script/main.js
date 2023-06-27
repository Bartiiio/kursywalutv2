import rendercountry from "../script/loadCountry.js";
import addCountryToDashborad from "../script/addCountry.js";
import apiNbp from "../script/nbpApi.js";
import InputChangeValue from "../script/InputChangeValue.js";

const btnChange = document.querySelector(".btnChange");
const btnAddCountry = document.querySelector(".add__country");
export const inputValue = document.getElementById("input");

let btnDelete;
let inputSearch;
export let inputNumber = 1;
export let closeWindow;
export let valuesArr;
export let selectedCountry;

const init = async function () {
   rendercountry._initload();
   valuesArr = await apiNbp._moneyValue();
};

init();

export const changeview = function () {
   const selectCountryView = document.querySelector(".select__country");
   selectCountryView.style.display =
      selectCountryView.style.display === "none" ? "block" : "none";
};

export const turnoffview = function () {
   const countries = document.querySelector(".countries");
   countries.style.visibility =
      countries.style.visibility === "hidden" ? "visible" : "hidden";
};

const inputSearchFn = () => {
   const inputSearch = document.getElementById("inputSearch");

   closeWindow = document.querySelector(".closeWindow");
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
};

btnChange.addEventListener("click", () => {
   selectedCountry = document.getElementById("row2").textContent;
   inputNumber = inputValue.value;
   changeview();
   turnoffview();
   inputSearchFn();
   rendercountry._renderChangedCountry();
});

btnAddCountry.addEventListener("click", () => {
   selectedCountry = document.getElementById("row2").textContent;
   inputNumber = inputValue.value;
   changeview();
   turnoffview();
   inputSearchFn();
   addCountryToDashborad._addCountryEvent();
});

window.addEventListener("click", (e) => {
   const targetElement = e.target;
   if (targetElement.classList.contains("country_delete")) {
      const section = e.target.closest("section");
      if (section) {
         section.remove();
      }
   }
});

inputValue.addEventListener("input", () => {
   selectedCountry = document.getElementById("row2").textContent;
   InputChangeValue._inputLisenner();
});
