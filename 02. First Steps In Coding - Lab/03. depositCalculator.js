function depositCalculator(input) {
    let depositedSum = parseFloat(input[0]);
    let deadline = parseInt(input[1]);
    let interestRate = parseFloat(input[2]);
    
    let sum = depositedSum + deadline * (depositedSum * (interestRate / 100) / 12);

    console.log(sum.toFixed(2))
}