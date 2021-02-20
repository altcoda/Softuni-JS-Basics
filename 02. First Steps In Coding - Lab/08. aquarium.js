function aquarium(input) {
    let length = parseFloat(input[0]);
    let width = parseFloat(input[1]);
    let height = parseFloat(input[2]);
    let percentage = parseFloat(input[3]);

    let volume = length * width * height;
    let litersCapacity = volume * 0.001; // 1 cm3 = 0.001 dm3
    let filledCapacity = (percentage / 100) * litersCapacity;
    let unfilledCapacity = litersCapacity - filledCapacity;

    console.log(unfilledCapacity)
}