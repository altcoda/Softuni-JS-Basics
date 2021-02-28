function minNumber(input) {
    let n = Number(input[0]);
  
    let num = 0, arr = [];
    for (let i = 1; i <= n; i++) {
      num = input[i];
      arr.push(num);
    }
    
    let minimum = Math.min(...arr);
    console.log(minimum);
  
}