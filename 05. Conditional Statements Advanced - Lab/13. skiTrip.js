function skiTrip(input) {
    let days = parseInt(input[0]);
    let aptType = input[1];
    let rating = input[2];
    let aptTypes = ["room for one person", "apartment", "president apartment"];
    let stayLength = [days < 10, days >= 10 && days <= 15, days > 15];
    let positiveRating = rating == "positive";
    let nightPrice, price, discount, totalPrice, tip;
  
    if (aptType == aptTypes[0]) {
      nightPrice = 18.0;
      totalPrice = nightPrice * (days - 1);
    } else if (aptType == aptTypes[1]) {
  
      nightPrice = 25.0;
      price = nightPrice * (days - 1);
  
      if (stayLength[0]) {
        discount = (30 / 100) * price;
      } else if (stayLength[1]) {
        discount = (35 / 100) * price;
      } else if (stayLength[2]) {
        discount = (50 / 100) * price;
      }
  
      totalPrice = price - discount;
  
    } else if (aptType == aptTypes[2]) {
  
      nightPrice = 35.0;
      price = nightPrice * (days - 1);
  
      if (stayLength[0]) {
        discount = (10 / 100) * price;
      } else if (stayLength[1]) {
        discount = (15 / 100) * price;
      } else if (stayLength[2]) {
        discount = (20 / 100) * price;
      }
  
      totalPrice = price - discount;
  
    }
  
    if (positiveRating) {
      tip = (25 / 100) * totalPrice;
      totalPrice += tip;
    } else {
      totalPrice -= (10 / 100) * totalPrice;
    }
  
    console.log(totalPrice.toFixed(2))
  
}  