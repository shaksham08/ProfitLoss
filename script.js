const stockdetails = document.querySelectorAll(".stockdetail");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");

btn.addEventListener("click", () => {
  const ip = parseInt(stockdetails[0].value);
  const qty = parseInt(stockdetails[1].value);
  const curr = parseInt(stockdetails[2].value);
  console.log(ip, qty, curr);
  calculateProfitAndLoss(ip, qty, curr);
});

function calculateProfitAndLoss(initialPrice, quantity, currentPrice) {
  if (initialPrice > currentPrice) {
    var loss = (initialPrice - currentPrice) * quantity;
    var lossPercentage = (loss / initialPrice) * 100;
    output.innerHTML = `Hey, the loss is ${loss} and the percent is ${lossPercentage.toPrecision(
      4
    )}% 😥😥😥😥`;
    document.body.style.backgroundColor = "#FF6666";
  } else if (currentPrice > initialPrice) {
    var profit = (currentPrice - initialPrice) * quantity;
    var profitPercentage = (profit / initialPrice) * 100;
    output.innerHTML = `Hey, the profit is ${profit} and the percent is ${profitPercentage.toPrecision(
      4
    )}% 🥳🥳🥳`;
    document.body.style.backgroundColor = "#90EE90";
  } else {
    output.innerHTML = `No pain no gain and no gain no pain`;
  }
}
