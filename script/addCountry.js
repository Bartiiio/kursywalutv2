import { changeview } from "../script/main.js";
import { closeWindow } from "../script/main.js";
import { turnoffview } from "../script/main.js";
import { valuesArr } from "../script/main.js";
import { inputNumber } from "../script/main.js";
import { selectedCountry } from "../script/main.js";

class addCountryToDashboard {
   _countriesContainer = document.querySelector(".countries");
   ////
   _addCountryEvent = () => {
      const exitButtonClick = () => {
         closeWindow.removeEventListener("click", exitButtonClick);
         window.removeEventListener("click", countryadd);
         turnoffview();
         changeview();
      };

      const countryadd = async (e) => {
         const section = e.target.closest("section");
         if (section) {
            window.removeEventListener("click", countryadd);
            closeWindow.removeEventListener("click", exitButtonClick);

            const imgElement = section.querySelector("img").src;
            const h3Element = section.querySelector("h3").textContent;
            const h4Element = section.querySelector("h4").textContent;
            const paragraphs = section.querySelectorAll("p");
            let language;
            let money;
            let moneyName;
            let value = 0;
            let selectedCountryValue = 0;
            let calcValue = 0;

            if (paragraphs.length > 1) {
               const secondParagraph = paragraphs[0];
               language = secondParagraph.textContent;
            }

            if (paragraphs.length > 2) {
               const thirdParagraph = paragraphs[1];
               money = thirdParagraph.textContent;
            }
            if (paragraphs.length >= 3) {
               const lastParagraph = paragraphs[2];
               moneyName = lastParagraph.textContent;
            }

            const addingCountry = money.slice(2);
            const mainCountry = selectedCountry.slice(2);
            let foundMain = false;
            let foundCountry = false;

            valuesArr.forEach((element) => {
               if (foundMain) {
                  return;
               }
               if (mainCountry === "PLN") {
                  value = 1;
                  foundMain = true;
               } else if (element.code === mainCountry) {
                  value = element.mid;
                  foundMain = true;
               }
            });

            valuesArr.forEach((element) => {
               if (foundCountry) {
                  return;
               }
               if (addingCountry === "PLN") {
                  selectedCountryValue = 1;
                  foundCountry = true;
               } else if (addingCountry === element.code) {
                  selectedCountryValue = element.mid;
                  foundCountry = true;
               }
            });

            if (mainCountry === "PLN") {
               calcValue = (inputNumber / selectedCountryValue).toFixed(2);
            } else {
               calcValue = (
                  (inputNumber * value) /
                  selectedCountryValue
               ).toFixed(2);
            }

            const html = `
            <section>
                <img class="country__img" src="${imgElement}" />
                <div class="country__data">
                    <h3 class="country__name">${h3Element}</h3>
                    <h4 class="country__region">${h4Element}</h4>
                    <p class="country__row">${language}</p>
                    <p class="country__row">${money}</p>
                    <p class="country__row">${moneyName}</p>
                    <p class="country__row">💲Value: ${calcValue}</p>
                    <p class="country_delete" id="deleteCountry"><span></span>Usuń!</p>
                </div>
            </section>
            `;
            inputSearch.value = "";
            const countylistItems = document.querySelectorAll("section");
            countylistItems.forEach((element) => {
               element.style.display = "block";
            });
            this._countriesContainer.insertAdjacentHTML("beforeend", html);
            changeview();
            turnoffview();
         }
      };

      window.addEventListener("click", countryadd);
      closeWindow.addEventListener("click", exitButtonClick);
   };
}

export default new addCountryToDashboard();
