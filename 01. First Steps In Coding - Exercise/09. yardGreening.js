function yardGreening(input) {
    let sqM = Number(input[0]);
    let price = (sqM * 7.61);
    let discount = ((price / 100) * 18).toFixed(2);
    let finalPrice = ((sqM * 7.61) - discount).toFixed(2);

    console.log(`The final price is: ${finalPrice} lv.` + '\n' + `The discount is: ${discount} lv.`);
}