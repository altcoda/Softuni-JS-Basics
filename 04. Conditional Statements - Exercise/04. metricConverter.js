function metricConverter(input) {
    let num = Number(input[0]);
    let inputUnit = input[1];
    let outputUnit = input[2];
    let converted;

    if (inputUnit == "mm") {
        if (outputUnit == "cm") {
            converted = num / 10;
        } else if (outputUnit == "m") {
            converted = num / 1000;
        }
    } else if (inputUnit == "cm") {
        if (outputUnit == "mm") {
            converted = num * 10;
        } else if (outputUnit == "m") {
            converted = num / 100;
        }
    } else if (inputUnit == "m") {
        if (outputUnit == "mm") {
            converted = num * 1000;
        }
        if (outputUnit == "cm") {
            converted = num * 100;
        }
    }

    console.log(converted.toFixed(3))

}