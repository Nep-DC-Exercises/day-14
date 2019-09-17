// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip.
function tipAmount(billAmt, serviceLevel) {
  let good = 0.2;
  let fair = 0.15;
  let bad = 0.1;

  if (serviceLevel == "good") {
    return billAmt * good;
  }

  if (serviceLevel == "fair") {
    return billAmt * fair;
  }

  if (serviceLevel == "bad") {
    return billAmt * bad;
  }

  return "Invalid Input. Please try again.";
}

console.log(tipAmount(100, "b"));
