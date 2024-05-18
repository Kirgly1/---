function sumOfDigits(number) {
    let sum = 0;
    const numStr = String(number);
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i]);
    }
    return sum;
}
console.log(sumOfDigits(245678)); 
console.log(sumOfDigits(97561));  
console.log(sumOfDigits(543));    
