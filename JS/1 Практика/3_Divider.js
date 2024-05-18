function findDivider(number) {
    if (number % 10 === 0) {
        console.log("Число делится на 10");
    } else if (number % 6 === 0) {
        console.log("Число делится на 6");
    } else if (number % 7 === 0) {
        console.log("Число делится на 7");
    } else if (number % 3 === 0) {
        console.log("Число делится на 3");
    } else if (number % 2 === 0) {
        console.log("Число делится на 2");
    } else {
        console.log("Не делится");
    }
}
findDivider(30)
findDivider(15)
findDivider(12)
findDivider(1643)
