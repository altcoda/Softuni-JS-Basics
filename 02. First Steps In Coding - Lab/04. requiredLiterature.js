function requiredLiterature(input) {
    let pages = parseInt(input[0]);
    let pagesPerHour = parseInt(input[1]);
    let days = parseInt(input[2]);
    
    let hoursPerDay = (pages / pagesPerHour) / days;

    console.log(hoursPerDay)
}