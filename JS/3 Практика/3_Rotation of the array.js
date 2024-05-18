function rotateArray(arr, rotations) {
    if (!arr || arr.length === 0) {
      console.log("Массив пустой или не существует");
      return;
    }
    const actualRotations = rotations % arr.length;

    const rotatedArray = arr.slice(actualRotations).concat(arr.slice(0, actualRotations));

    console.log(arr);
    console.log(`Массив после ${rotations} оборотов (против часовой стрелки):`);
    console.log(rotatedArray);
  }
  
  rotateArray([1, 2, 3, 4, 5], 2);
  rotateArray([2, 4, 15, 31], 5);