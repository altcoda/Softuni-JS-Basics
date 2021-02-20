function addFifteenMinutes(input) {

    let hour = parseInt(input[0], 10);
    let mins = parseInt(input[1], 10);
    
    let newMins = mins + 15;
    if(hour == 24) { hour = `0`} 
    
    if(newMins > 60) {
       mins = newMins % 60;
       if(hour == 23) { hour = `0`} 
       else { hour++; }
       if(mins < 10) { mins = `0${mins}`}
       console.log(`${hour}:${mins}`);
    } else if(newMins == 60) {
       if(hour == 23) { hour = `0`}
       else { hour++; }
       console.log(`${hour}:00`);
    } else if(newMins % 60 == 1) {
       if(hour == 23) { hour = `0`} 
       else { hour++; }
       console.log(`${hour}:00`);
    } else {
       mins += 15;
       if(mins < 10) { mins = `0${mins}`}
       console.log(`${hour}:${mins}`);
    }
    
}