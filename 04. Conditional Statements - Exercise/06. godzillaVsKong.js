function godzillaVsKong(input) {

    let movieBudget = parseFloat(input[0]);
    let numOfActors = parseInt(input[1]);
    let outfitCost = parseFloat(input[2]);

    let decorCost = (10 / 100) * movieBudget;
    let discount = 0.0;
    if (numOfActors > 150) {
        discount = (10 / 100) * outfitCost; // Discount for over 150 actors
        outfitCost -= discount;
    }

    let costs = (numOfActors * outfitCost) + decorCost;
    if (costs > movieBudget) {
        let neededMoney = (costs - movieBudget).toFixed(2);
        console.log(`Not enough money!` + '\n' +
            `Wingard needs ${neededMoney} leva more.`)
    } else {
        let moneyLeft = (movieBudget - costs).toFixed(2);
        console.log(`Action!` + '\n' +
            `Wingard starts filming with ${moneyLeft} leva left.`)
    }

}