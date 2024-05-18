function isMagicMatrix(matrix) {
    if (!matrix || matrix.length === 0) {
      console.log("Матрица пуста или не существует");
      return false;
    }
  
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    for (let i = 1; i < rows; i++) {
      if (matrix[i].length !== cols) {
        console.log("Матрица не прямоугольная");
        return false;
      }
    }
  
    let referenceSum = 0;
    for (let j = 0; j < cols; j++) {
      referenceSum += matrix[0][j];
    }
  
    for (let i = 1; i < rows; i++) {
      let rowSum = 0;
      for (let j = 0; j < cols; j++) {
        rowSum += matrix[i][j];
      }
      if (rowSum !== referenceSum) {
        console.log("Сумма ячеек в строке", i + 1, "не равна сумме первой строки");
        return false;
      }
    }
  
    for (let j = 0; j < cols; j++) {
      let colSum = 0;
      for (let i = 0; i < rows; i++) {
        colSum += matrix[i][j];
      }
      if (colSum !== referenceSum) {
        console.log("Сумма ячеек в столбце", j + 1, "не равна сумме первой строки");
        return false;
      }
    }
  
    return true;
  }
  
  const matrix1 = [
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
  ];
  const matrix2 = [
    [4, 5, 6],
    [3, 5, 4],
    [2, 5, 5]
  ];
  
  const matrix3 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];
    
  const matrix4 = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
  ];
  
  
  console.log(isMagicMatrix(matrix1));
  console.log(isMagicMatrix(matrix2));
  console.log(isMagicMatrix(matrix4));