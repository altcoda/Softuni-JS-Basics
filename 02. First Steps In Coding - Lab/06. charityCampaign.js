function charityCampaign(input) {
    let days = parseInt(input[0]);
    let bakers = parseInt(input[1]);
    let numOfCakes = parseInt(input[2]);
    let numOfWaffles = parseInt(input[3]);
    let numOfPancakes = parseInt(input[4]);
    
    const dailyEarnings = bakers * ((numOfCakes * 45) + (numOfWaffles * 5.8) + (numOfPancakes * 3.2));
    const totalEarnings = days * dailyEarnings;
    const percentage = (1/8) * 100;
    const expense = (percentage / 100) * totalEarnings;
    const finalSum = totalEarnings - expense;
    
    console.log(finalSum.toFixed(2))
}