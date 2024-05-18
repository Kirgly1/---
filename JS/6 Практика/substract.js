function subtract() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let p = document.createElement("p");
    p.textContent=firstNumber-secondNumber;
    document.getElementById("result").appendChild(p);
}