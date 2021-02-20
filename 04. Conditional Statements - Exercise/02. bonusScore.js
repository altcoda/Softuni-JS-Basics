function bonusScore(input) {

    let score = Number(input[0]);
    let bonus = 0.0;

    // Check if score is even
    if (score % 2 == 0) { bonus += 1; }
    // Check if score ends with a five
    if (score % 10 == 5) { bonus += 2; }
    // Check range
    if (score <= 100) {
        bonus += 5;
    } else if (score > 100 && score <= 1000) {
        bonus += (20 / 100) * score;
    } else if (score > 1000) {
        bonus += (10 / 100) * score;
    }

    console.log(bonus);
    console.log(score + bonus);

}