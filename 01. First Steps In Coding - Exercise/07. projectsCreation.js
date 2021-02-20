function projectsCreation(input) {
  let architectName = input[0];
  let numOfProjects = Number(input[1]);
  let numOfHours = numOfProjects * 3;
  
  console.log(`The architect ${architectName} will need ${numOfHours} hours to complete ${numOfProjects} project\/s.`);
}