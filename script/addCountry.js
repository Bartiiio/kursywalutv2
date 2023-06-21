import loadCountry from "../script/loadCountry.js";
import { changeview } from "../script/main.js";

class addCountry {
   _countriesContainer = document.querySelector(".countries");
   _countryview = document.querySelector(".select__country");
   _deleteCountryBtn = document.getElementById("deleteCountry");
   _addCountry = document.querySelector(".add__country");

   _eventWindow() {
      this._addCountry.addEventListener("click", (e) => {
         changeview();
         if (this._countryview.style.display === "block") {
            window.addEventListener("click", (e) => {
               const section = e.target.closest("section");
               if (section) {
                  const countryData = section.querySelector(".country__data");
                  const pElement = document.createElement("p");
                  pElement.classList.add("country__delete");
                  pElement.id = "deleteCountry";
                  pElement.innerHTML = "<span></span>Usuń!";
                  countryData.appendChild(pElement);
                  const html = section.outerHTML;
                  this._countriesContainer.insertAdjacentHTML(
                     "beforeend",
                     html
                  );
                  changeview();
               }
            });
         }
      });
   }

   _deleteCountry() {
      this._deleteCountryBtn.addEventListener("click", (e) => {
         if (this._countryview.style.display === "none") {
            const section = e.target.closest("section");
            if (section) {
               section.remove();
            }
         }
      });
   }
}

export default new addCountry();
