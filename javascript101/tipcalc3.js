// Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

function splitAmount(billAmt, serviceLevel, split) {
  let good = 0.2;
  let fair = 0.15;
  let bad = 0.1;
  let totalAmt = 0;
  let splitAmt = 0;

  if (serviceLevel == "good") {
    totalAmt += billAmt + billAmt * good;
    splitAmt += totalAmt / split;
    return splitAmt;
  }

  if (serviceLevel == "fair") {
    totalAmt += billAmt + billAmt * fair;
    splitAmt += totalAmt / split;
    return splitAmt;
  }

  if (serviceLevel == "bad") {
    totalAmt += billAmt + billAmt * bad;
    splitAmt += totalAmt / split;
    return splitAmt;
  }

  return "Invalid Input. Please try again.";
}

let splitGood = splitAmount(100, "good", 2);
let splitFair = splitAmount(100, "fair", 2);
let splitBad = splitAmount(100, "bad", 2);

console.log(splitGood, splitFair, splitBad);
