function roundNumberToPrecision(number, precision) {
    precision = Math.min(precision, 15);
    const roundedNumber = parseFloat(number.toFixed(precision));
    return roundedNumber;
}

console.log(roundNumberToPrecision(3.1415926535897932384, 2));
console.log(roundNumberToPrecision(10.50000, 3)); 
