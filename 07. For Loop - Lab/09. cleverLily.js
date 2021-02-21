function cleverLily(input) {
    let age = parseInt(input[0]);
    let laundryPrice = Number(input[1]);
    let toyPrice = parseInt(input[2]);
  
    let gain = 10, sum = 0;
    for (let i = 1; i <= age; i++) {
      if (i % 2 == 0) {
        sum += gain; // add gifted money
        gain += 10; // every even year gifted money increases with 10
        sum -= 1; // her brother takes 1 lv.
      } else {
        sum += toyPrice; // she sells every gifted toy
      }
    }
  
    if (sum >= laundryPrice) {
      let moneyLeft = sum - laundryPrice;
      console.log(`Yes! ${moneyLeft.toFixed(2)}`)
    } else {
      let moneyNeeded = laundryPrice - sum;
      console.log(`No! ${moneyNeeded.toFixed(2)}`)
    }
  
}  