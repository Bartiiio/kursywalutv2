import rendercountry from "../script/loadCountry.js";
import addCountry from "../script/addCountry.js";

const addCountryBtn = document.querySelector(".add__country");
const selectCountryView = document.querySelector(".select__country");
const closeCountryView = document.querySelector(".closeWindow");
const btnChange = document.querySelector(".btnChange");
const btnDelete = document.getElementById("deleteCountry");

const init = function () {
   rendercountry._initload();
   addCountry._eventWindow();
   addCountry._deleteCountry();
};

init();

export const changeview = function () {
   selectCountryView.style.display =
      selectCountryView.style.display === "none" ? "block" : "none";
};

addCountryBtn.addEventListener("click", changeview);

closeCountryView.addEventListener("click", changeview);

btnChange.addEventListener("click", changeview);

btnDelete.addEventListener("click", () => {
   addCountry._deleteCountry();
});
