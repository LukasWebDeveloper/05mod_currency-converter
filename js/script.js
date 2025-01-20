{

   const calculateResult = (amount, currency) => {

      const plnRate = 1;
      const eurRate = 4.23;
      const gbpRate = 5.13;
      const usdRate = 4.09;
      const chfRate = 4.53;

      switch (currency) {
         case "EUR":
            return amount / eurRate;

         case "PLN":
            return amount / plnRate;

         case "GBP":
            return amount / gbpRate;

         case "USD":
            return amount / usdRate;

         case "CHF":
            return amount / chfRate;
      }

   }

   const updateResultText = (amount, result, currency) => {
      const final_amount = document.querySelector(".js-finalAmount");  
      const rate_amount = document.querySelector(".js-rateAmount");


      rate_amount.innerHTML = `${amount} zł`;

      final_amount.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
   }

   const onFormSubmit = () => {

      const currency_amount = document.querySelector(".js-currencyAmount");
      const currencyElement = document.querySelector(".js-currency");
      const amount = +currency_amount.value;
      const currency = currencyElement.value;

      const result = calculateResult(amount, currency);


      updateResultText(amount, result, currency);
   }


   const init = () => {
      const formElement = document.querySelector(".js-form");

      formElement.addEventListener("input", onFormSubmit);
   }

   init();
}