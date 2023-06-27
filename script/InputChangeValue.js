import { inputValue } from "../script/main.js";
import { valuesArr } from "../script/main.js";
import { selectedCountry } from "../script/main.js";

class InputChange {
   _inputLisenner = () => {
      const inputNumber = inputValue.value;
      const AllSections = document.querySelector(".countries");
      const CountryoNDashbords = AllSections.querySelectorAll("section");
      const mainCountry = selectedCountry.slice(2);

      CountryoNDashbords.forEach((element) => {
         let value = 0;
         let foundMain = false;
         let foundCountry = false;
         let addingValue;
         let valueSecondCountry;
         let calcValue;

         const paragraphs = element.querySelectorAll("p");

         if (paragraphs.length > 2) {
            const thirdParagraph = paragraphs[1];
            addingValue = thirdParagraph.textContent.slice(2);
         }

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

         console.log(value);

         valuesArr.forEach((element) => {
            if (foundCountry) {
               return;
            }
            if (addingValue === "PLN") {
               valueSecondCountry = 1;
               foundCountry = true;
            } else if (addingValue === element.code) {
               valueSecondCountry = element.mid;
               foundCountry = true;
            }
         });

         if (mainCountry === "PLN") {
            calcValue = (inputNumber / valueSecondCountry).toFixed(2);
         } else {
            calcValue = ((inputNumber * value) / valueSecondCountry).toFixed(2);
         }

         if (paragraphs.length >= 4) {
            const thirdParagraph = paragraphs[3];
            const newValue = document.createElement("p");
            newValue.className = "country__row";
            newValue.textContent = `💲Value: ${calcValue}`;
            thirdParagraph.parentNode.replaceChild(newValue, thirdParagraph);
         }
      });
   };
}

export default new InputChange();
