{
   const formElement = document.querySelector(".js-form");                // formularz
   const currency_amount = document.querySelector(".js-currencyAmount");  // wprowadzana kwota pieniędzy w PLN
   const rate_amount = document.querySelector(".js-rateAmount");          // zamieniana kwota w PLN
   const currencyElement = document.querySelector(".js-currency")         // nowa waluta
   const final_amount = document.querySelector(".js-finalAmount");        // ostateczna zamieniona kwota waluty

   const plnRate = 1;
   const eurRate = 4.23;
   const gbpRate = 5.13;
   const usdRate = 4.09;
   const chfRate = 4.53;

   formElement.addEventListener("input", () => {

      const amount = +currency_amount.value;
      const currency = currencyElement.value;

      let result;


      switch (currency) {
         case "EUR":
            result = amount / eurRate;
            break;

         case "PLN":
            result = amount / plnRate;
            break;

         case "GBP":
            result = amount / gbpRate;
            break;

         case "USD":
            result = amount / usdRate;
            break;

         case "CHF":
            result = amount / chfRate;
            break;
      }

      rate_amount.innerHTML = `${currency_amount.value} zł`;

      final_amount.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
   });
}