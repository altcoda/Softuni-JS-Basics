function worldSwimmingRecord(input) {
    let worldRecordSec = Number(input[0]);
    let lapMeters = Number(input[1]);
    let secSpeed = Number(input[2]); // time for which he swims 1m
    let delay = (Math.floor(lapMeters / 15)) * 12.5; // slows down 12.5sec every 15min
    let newTime = secSpeed * lapMeters; // new time seconds
    newTime += delay;

    if (newTime < worldRecordSec) {
        console.log(`Yes, he succeeded! The new world record is ${Math.abs(newTime).toFixed(2)} seconds.`);
    } else {
        let timeDiff = newTime - worldRecordSec;
        console.log(`No, he failed! He was ${Math.abs(timeDiff).toFixed(2)} seconds slower.`)
    }

}