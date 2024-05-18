function calculator(num1, operator, num2) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log('Invalid operator');
        return;
    }
    console.log(result.toFixed(2));
  }
  
  calculator(20, '+', 5); 
  calculator(20.345, '-', 10.123); 
  calculator(10, '*', 5);
  calculator(10, '/', 5);
  calculator(10, '-', 0.5);
