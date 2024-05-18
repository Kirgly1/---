function operateArray(arr) {
    let originalSum = 0;
    let modifiedSum = 0;
  
    const modifiedArray = [];
  
    arr.forEach((num, index) => {
      originalSum += num;
  
      let modifiedNum;
      if (num % 2 === 0) {
        modifiedNum = num + index;
      } else {
        modifiedNum = num - index;
      }
  
      modifiedSum += modifiedNum;
  
      modifiedArray.push(modifiedNum);
    });
  
    console.log("Новый массив:", modifiedArray);
    console.log("Сумма чисел исходного массива:", originalSum);
    console.log("Сумма чисел измененного массива:", modifiedSum);
  }
  operateArray([1,2,3,4,5])
  operateArray([5,15,23,56,35])
  operateArray([-5,11,3,0,2])