function scholarship(input) {
    let income = parseFloat(input[0]);
    let averageGrade = parseFloat(input[1]);
    let minSalary = parseFloat(input[2]);
    let excellenceScholarship = averageGrade * 25;
    let hasScholarship = false;

    if (income < minSalary && averageGrade > 4.5) {
        hasScholarship = true;
        let socialScholarship = (35 / 100) * minSalary;
        if (averageGrade >= 5.5 && excellenceScholarship > socialScholarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellenceScholarship)} BGN`)
        } else {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)
        }
    } else if (averageGrade >= 5.5) {
        hasScholarship = true;
        console.log(`You get a scholarship for excellent results ${Math.floor(excellenceScholarship)} BGN`)
    }
    if (!hasScholarship) {
        console.log(`You cannot get a scholarship!`)
    }
}