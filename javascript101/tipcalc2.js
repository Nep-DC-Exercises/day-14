// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount.

function totalAmount(billAmt, serviceLevel) {
  let good = 0.2;
  let fair = 0.15;
  let bad = 0.1;
  let totalAmt = 0;

  if (serviceLevel == "good") {
    return (totalAmt += billAmt + billAmt * good);
  }

  if (serviceLevel == "fair") {
    return (totalAmt += billAmt + billAmt * fair);
  }

  if (serviceLevel == "bad") {
    return (totalAmt += billAmt + billAmt * bad);
  }

  return "Invalid Input. Please try again.";
}

total_good = totalAmount(100, "good");
total_fair = totalAmount(100, "fair");
total_bad = totalAmount(100, "bad");

console.log(total_good, total_fair, total_bad);
