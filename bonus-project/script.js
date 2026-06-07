function calculate(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

    document.getElementById("result").innerHTML =
    `
    Addition: ${addition}<br>
    Subtraction: ${subtraction}<br>
    Multiplication: ${multiplication}<br>
    Division: ${division}
    `;
}