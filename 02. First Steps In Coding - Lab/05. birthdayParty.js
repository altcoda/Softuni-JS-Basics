function birthdayParty(input) {
  let rent = parseFloat(input[0]);
  let cake = (20 / 100) * rent;
  let drinks = cake - ((45 / 100) * cake);
  let animator = rent / 3;
  
  let budget = rent + cake + drinks + animator;

  console.log(budget.toFixed(2))
}