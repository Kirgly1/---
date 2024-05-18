function findCommonElements(arr1, arr2) {
    let commonElements = [];
  
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                commonElements.push(arr1[i]);
                break;
            }
        }
    }
  
    console.log("Общие элементы:");
    for (let element of commonElements) {
        console.log(element);
    }
  
    return commonElements;
  }
    
    findCommonElements(['Hey','hello',2,4,'Peter','e'],['Petar',10,'hey',4,'hello','2']);
    findCommonElements(['R','u','s','s','i','a'],['R','u','t']);  