function sumSeconds(input) {

    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    let totalTime = timeFirst + timeSecond + timeThird;
    
    let seconds = totalTime % 60;
    if (seconds < 10) { seconds = `0${seconds}`; }
    let minutes = Math.floor(totalTime / 60);

    console.log(`${minutes}:${seconds}`)
}