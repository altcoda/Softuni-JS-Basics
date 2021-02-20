function fruitMarket(input) {
  let strawberriesPrice = parseFloat(input[0]);
  let bananasNeeded = parseFloat(input[1]);
  let orangesNeeded = parseFloat(input[2]);
  let raspberriesNeeded = parseFloat(input[3]);
  let strawberriesNeeded = parseFloat(input[4]);

  let raspberriesPrice = (strawberriesPrice / 2);
  let orangesPrice = (raspberriesPrice - ((40 / 100) * raspberriesPrice));
  let bananasPrice = (raspberriesPrice - ((80 / 100) * raspberriesPrice));
  
  let moneyNeeded = (strawberriesNeeded * strawberriesPrice) + (raspberriesNeeded * raspberriesPrice) + (bananasNeeded * bananasPrice) + (orangesNeeded * orangesPrice);

  console.log(moneyNeeded.toFixed(2))
}