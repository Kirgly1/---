function calculatePrice(groupSize, groupType, dayOfWeek) {
    let pricePerPerson;
  
    if (groupType === "Students") {
      if (dayOfWeek === "Friday") {
        pricePerPerson = 8.45;
      } else if (dayOfWeek === "Saturday") {
        pricePerPerson = 9.80;
      } else if (dayOfWeek === "Sunday") {
        pricePerPerson = 10.46;
      }
    } else if (groupType === "Corporate") {
      if (dayOfWeek === "Friday") {
        pricePerPerson = 10.90;
      } else if (dayOfWeek === "Saturday") {
        pricePerPerson = 15.60;
      } else if (dayOfWeek === "Sunday") {
        pricePerPerson = 16;
      }
    } else if (groupType === "Regular") {
      if (dayOfWeek === "Friday") {
        pricePerPerson = 15;
      } else if (dayOfWeek === "Saturday") {
        pricePerPerson = 20;
      } else if (dayOfWeek === "Sunday") {
        pricePerPerson = 22.50;
      }
    }
  
    let totalPrice = groupSize * pricePerPerson;
  
    if (groupType === "Students" && groupSize >= 30) {
      totalPrice *= 0.85; // Скидка 15%
    } else if (groupType === "Corporate" && groupSize >= 100) {
      totalPrice -= (10 * pricePerPerson); // 10 человек бесплатно
    } else if (groupType === "Regular" && groupSize >= 10 && groupSize <= 20) {
      totalPrice *= 0.95; // Скидка 5%
    }
  
    return `Total price: ${totalPrice.toFixed(2)}`;
  }
  
  console.log(calculatePrice(30, "Students", "Sunday")); 
  console.log(calculatePrice(40, "Regular", "Saturday")); 
  console.log(calculatePrice(1, "Regular", "Sunday")); 
