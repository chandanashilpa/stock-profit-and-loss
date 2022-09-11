const inputInitial = document.querySelector("#initial-price");
const inputQuantity = document.querySelector("#quantity");
const inputCurrent = document.querySelector("#current-price");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#output");

calculate.addEventListener("click", () => {
  if (
    inputInitial.value == "" ||
    inputQuantity.value == "" ||
    inputCurrent.value == ""
  ) {
    output.innerText = "Please enter values in all the fields";
  } else if (Number(inputQuantity.value) <= 0) {
    output.innerText = "Quantity should be greater than 0";
  } else if (Number(inputInitial.value) < 0 || Number(inputCurrent.value) < 0) {
    output.innerText = "Stock prices can't be negative";
  } else {
    initialPrice = Number(inputInitial.value);
    quantity = Number(inputQuantity.value);
    currentPrice = Number(inputCurrent.value);
    if (currentPrice > initialPrice) {
      var priceDiff = currentPrice - initialPrice;
      var profit = priceDiff * quantity;
      var profitPercent = (priceDiff / initialPrice) * 100;

      output.innerText =
        "Your profit is " +
        profit +
        " and profit percentage is " +
        profitPercent.toFixed(2) +
        "%";
      output.style.color = "Green";
    } else if (currentPrice < initialPrice) {
      var priceDiff = initialPrice - currentPrice;
      var loss = priceDiff * quantity;
      var lossPercent = (priceDiff / initialPrice) * 100;
      output.innerText =
        "Your loss is " +
        loss +
        " and loss percentage is " +
        lossPercent.toFixed(2) +
        "%";
      output.style.color = "Red";
    } else {
      output.innerText =
        "Since the current price of your stocks is equal to the initial price there's no profit/loss";
      output.style.color = "White";
    }
  }
});
