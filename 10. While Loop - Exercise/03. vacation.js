function vacation(input) {
    let vacationCost = parseFloat(input[0]);
    let wallet = parseFloat(input[1]);
  
    let action = '', actions = [], sum = 0, counter = 0;
    let i = 2, n = 3;
    
    while (wallet <= vacationCost) {
      action = input[i];
      sum = parseFloat(input[n]);
      counter++;
      
      if(action == "spend" && sum >= wallet) { wallet = 0; }
      else if(action == "spend") {
        wallet -= sum;
          actions.push("spend");
      } else if(action == "save") {
          actions.length = 0;
        wallet += sum;
      }
      if(actions.length == 5) {
          console.log(`You can't save the money.` + '\n' +
        `${counter}`);
        break;
      } else if(wallet >= vacationCost) {
          console.log(`You saved the money for ${counter} days.`);
        break;
      }
      
      i+=2; n+=2;
    }
}