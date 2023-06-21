import loadCountry from "../script/loadCountry.js";
import { changeview } from "../script/main.js";

class addCountry {
   _countriesContainer = document.querySelector(".countries");
   _countryview = document.querySelector(".select__country");
   _eventWindow() {
      window.addEventListener("click", (e) => {
         if (this._countryview.style.display === "block") {
            const section = e.target.closest("section");
            if (section) {
               const flag = section.querySelector(".country__img").src;
               const name = section.querySelector(".country__name").textContent;
               const region =
                  section.querySelector(".country__region").textContent;
               const countryDataDiv = section.querySelector(".country__data");

               const paragraphs = countryDataDiv.querySelectorAll("p");
               const paragraphValues = Array.from(paragraphs).map((p) => {
                  let text = "";
                  for (let node of p.childNodes) {
                     if (node.nodeType === Node.TEXT_NODE) {
                        text += node.nodeValue;
                     }
                  }
                  return text.trim();
               });
               const language = paragraphValues[0];
               const keycurrencies = paragraphValues[1];
               const curriencies = paragraphValues[2];
               const html = `
            <section>
                <img class="country__img" src="${flag}" />
                <div class="country__data">
                    <h3 class="country__name">${name}</h3>
                    <h4 class="country__region">${region}</h4>
                    <p class="country__row"><span>🗣️</span>${language}</p>
                    <p class="country__row"><span>💰</span>${keycurrencies}</p>
                    <p class="country__row"><span>💰</span>${curriencies}</p>
                    <p class="country__row"><span>🪙</span>Value</p>
                    <p id="deleteCountry" class="country__delete"><span></span>Usuń!</p>
                </div>
            </section>
      `;
               this._countriesContainer.insertAdjacentHTML("beforeend", html);
               changeview();
            }
         }
      });
   }
   _deleteCountry() {
      window.addEventListener("click", (e) => {
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
