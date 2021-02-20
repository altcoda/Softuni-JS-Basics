function areaOfFigures(input) {

    let figureType = input[0];
    let area, width, height;

    switch (figureType) {
        case "square":
            height = Number(input[1])
            area = height * height;
            console.log(area.toFixed(3));
            break;
        case "rectangle":
            let width1 = Number(input[1]);
            let width2 = Number(input[2]);
            area = width1 * width2;
            console.log(area.toFixed(3));
            break;
        case "circle":
            let rad = Number(input[1]);
            area = Math.PI * Math.pow(rad, 2);
            console.log(area.toFixed(3));
            break;
        case "triangle":
            width = Number(input[1]);
            height = Number(input[2]);
            area = (1 / 2) * width * height;
            console.log(area.toFixed(3));
            break;
        default:
            break;
    }

}