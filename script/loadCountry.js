class RenderCountry {
   _countriesContainer = document.querySelector(".country__list");
   _countryImg = document.querySelector(".country__img");
   _countryName = document.querySelector(".country__name");
   _countryRowId = document.getElementById("row1");
   _countryRow = document.getElementById("row2");

   _renderAll = async (data) => {
      const flag = data.flags.png;
      const name = Object.values(data.name)[0];
      const region = data.region;
      const language = Object.values(data.languages)[0];
      const keycurrencies = Object.keys(data.currencies)[0];
      const curriencies = Object.values(data.currencies)[0].name;
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
          </div>
      </section>
      `;
      this._countriesContainer.insertAdjacentHTML("beforeend", html);
   };

   _renderDefaultValute = async (data) => {
      this._countryImg.src = data.flags.png;
      this._countryName.textContent = Object.values(data.name)[0];
      this._countryRowId.innerHTML = `<p class="country__row" id="row1"><span>🗣️</span>${
         Object.values(data.languages)[0]
      }</p>`;
      this._countryRow.innerHTML = `<p class="country__row" id="row2"><span>💰</span>${
         Object.keys(data.currencies)[0]
      }</p>`;
   };

   _renderAllCountries = async (data) => {
      try {
         data.forEach((element) => {
            if (!element) return;
            this._renderAll(element);
            if (element.cioc == "POL") {
               this._renderDefaultValute(element);
            }
         });
      } catch (err) {
         console.log(err);
      }
   };

   _loadAllCountry = async () => {
      try {
         const getData = await fetch(`https://restcountries.com/v3.1/all`);
         const dataJson = await getData.json();
         this._renderAllCountries(dataJson);
      } catch (err) {
         console.log(err);
      }
   };

   _initload() {
      window.addEventListener("load", this._loadAllCountry);
   }
}

export default new RenderCountry();
