function hotelRoom(input) {
  let month = input[0];
  let nights = parseInt(input[1]);
  let mediumStay = nights > 7;
  let longStay = nights > 14;

  let studioPct = 0;
  let aptPct = 0;
  let studioPrice = 0.0;
  let aptPrice = 0.0;

  switch (month) {
    case "May":
    case "October":
      studioPrice = 50;
      aptPrice = 65;
      if (longStay) {
        studioPct += 30
      } else if (mediumStay) {
        studioPct += 5
      }
      break;
    case "June":
    case "September":
      studioPrice = 75.20;
      aptPrice = 68.70;
      if (longStay) {
        studioPct += 20
      }
      break;
    case "July":
    case "August":
      studioPrice = 76;
      aptPrice = 77;
      break;
    default:
      break;
  }

  if (longStay) {
    aptPct += 10
  }

  studioPrice *= nights;
  aptPrice *= nights;
  studioPrice -= (studioPct / 100) * studioPrice;
  aptPrice -= (aptPct / 100) * aptPrice;

  console.log(`Apartment: ${aptPrice.toFixed(2)} lv.` + '\n' +
    `Studio: ${studioPrice.toFixed(2)} lv.`)

}
