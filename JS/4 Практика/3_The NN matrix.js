function printMatrix(n) {
    for (let i = 0; i < n; i++) {
      let row = '';
      for (let j = 0; j < n; j++) {
        row += n + ' ';
      }
      console.log(row);
    }
  }
printMatrix(7)
printMatrix(2)