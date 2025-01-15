let formElement = document.querySelector(".js-form");                // formularz
let currency_amount = document.querySelector(".js-currencyAmount");  // wprowadzana kwota pieniędzy w PLN
let rate_amount = document.querySelector(".js-rateAmount");          // zamieniana kwota w PLN
let currencyElement = document.querySelector(".js-currency")         // nowa waluta
let final_amount = document.querySelector(".js-finalAmount");        // ostateczna zamieniona kwota waluty

let plnRate = 1;
let eurRate = 4.23;
let gbpRate = 5.13;
let usdRate = 4.09;
let chfRate = 4.53;

formElement.addEventListener("input", () => {

   let amount = +currency_amount.value;
   let currency = currencyElement.value;

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