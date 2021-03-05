function examPreparation(input) {
    let limit = parseInt(input[0]);
  
    let exc = '', grade = 0.0, i = 1, n = 2;
    let badGrades = [], sum = 0, lastExc = '', numProblems = 0;
    
    while (exc != "Enough") {
      exc = input[i];
      grade = Number(input[n]);
  
      if (grade <= 4) { badGrades.push(grade) }
  
      if (exc == "Enough") {
        let average = sum / numProblems;
        console.log(`Average score: ${average.toFixed(2)}` + '\n' +
          `Number of problems: ${numProblems}` + '\n' +
          `Last problem: ${lastExc}`);
        break;
      } else if (badGrades.length == limit) {
        console.log(`You need a break, ${badGrades.length} poor grades.`)
        break;
      }
      
      lastExc = exc;
      sum += grade;
      i+=2; n+=2; numProblems++;
    }
  
}