function passwordGuess(input) {
  let pass = input[0];
  const phrase = "s3cr3t!P@ssw0rd";

  (pass == phrase) ? console.log("Welcome") : console.log("Wrong password!")
}