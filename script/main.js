import rendercountry from "../script/loadCountry.js";
import addCountry from "../script/addCountry.js";
const btnChange = document.querySelector(".btnChange");

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
   rendercountry._renderChangedCountry();
});
