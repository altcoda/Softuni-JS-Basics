function toyShop(input) {
    let travelCosts = parseFloat(input[0]);
    let numOfPuzzles = parseInt(input[1]);
    let numOfDolls = parseInt(input[2]);
    let numOfTeddybears = parseInt(input[3]);
    let numOfMinions = parseInt(input[4]);
    let numOfTrucks = parseInt(input[5]);

    let orderedItems = numOfPuzzles + numOfDolls + numOfTeddybears + numOfMinions + numOfTrucks;
    let availableMoney = (numOfPuzzles * 2.6) + (numOfDolls * 3) + (numOfTeddybears * 4.1) + (numOfMinions * 8.2) + (numOfTrucks * 2);

    let discount, rent;
    if (orderedItems >= 50) {
        discount = (25 / 100) * availableMoney;
        availableMoney -= discount;
        rent = (10 / 100) * availableMoney;
        availableMoney -= rent;
        if (availableMoney >= travelCosts) {
            availableMoney -= travelCosts;
            console.log(`Yes! ${availableMoney.toFixed(2)} lv left.`)
        } else {
            let moneyNeeded = (travelCosts - availableMoney).toFixed(2);
            console.log(`Not enough money! ${moneyNeeded} lv needed.`)
        }
    } else {
        rent = (10 / 100) * availableMoney;
        availableMoney -= rent;
        if (availableMoney >= travelCosts) {
            availableMoney -= travelCosts;
            console.log(`Yes! ${availableMoney.toFixed(2)} lv left.`)
        } else {
            let moneyNeeded = (travelCosts - availableMoney).toFixed(2);
            console.log(`Not enough money! ${moneyNeeded} lv needed.`)
        }
    }
}