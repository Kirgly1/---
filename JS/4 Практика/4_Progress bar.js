function progress_bar(number){
    if ((1 <= number <= 100) && (number%10 == 0) ){
      const num_of_persent = number/10;
      const num_of_dots = 10 - num_of_persent;
      let progress_bar = "[";
      for(let i =0; i < num_of_persent; i++){
        progress_bar += "%";
      }
      for(let i =0; i < num_of_dots; i++){
        progress_bar += ".";
      }
      progress_bar+="]";
      if (number == 100) return number + "% " + "Complete!" + "\n" + progress_bar
      return number + "% " + progress_bar + "\n" + "Still loading..."
    }
    else{
      return "Wrong number"
    }
  }
  console.log(progress_bar(30));
  console.log(progress_bar(50));
  console.log(progress_bar(100));  