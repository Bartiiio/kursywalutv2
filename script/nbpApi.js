class ApiNbp {
   _valuesArr = [];
   _moneyValue = async () => {
      const abc = ["a", "b", "c"];
      const fetchElements = abc.map(async (element) => {
         return await fetch(
            `https://api.nbp.pl/api/exchangerates/tables/${element}/`
         );
      });
      const promiseAllElements = await Promise.all(fetchElements);

      for (const promise of promiseAllElements) {
         const [promiseValue] = await promise.json();
         const ratesValue = Object.values(promiseValue.rates);
         this._valuesArr.push(...ratesValue);
      }
      return this._valuesArr;
   };
}

export default new ApiNbp();
