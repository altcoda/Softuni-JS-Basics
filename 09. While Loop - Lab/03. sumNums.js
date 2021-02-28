function sumNums(input) {
    let initNum = Number(input[0]);
  
    let index = 1, sum = 0;
    while (sum <= initNum) {
      let num = Number(input[index]);
      index++;
      sum += num;
      if (sum >= initNum) {
        console.log(sum)
      }
    }
  
}