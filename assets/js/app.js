import { Calculator } from "./calculator.js";

const calculator = new Calculator();

const display = document.getElementById("calc-display");
display.textContent = calculator.getDisplay();

const numbers = document.querySelectorAll("[data-type='number']");
numbers.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendDigit(parseInt(button.textContent));
        display.textContent = calculator.getDisplay();
    });
});

const operators = document.querySelectorAll("[data-type='operator']");
operators.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.textContent) {
            case "+":
                calculator.add();
                break;
            case "-":
                calculator.subtract();
                break;
            case "x":
                calculator.multiply();
                break;
            case "/":
                calculator.divide();
                break;
            case "=":
                calculator.equals();
                break;
            case "AC":
                calculator.clear();
                break;
            case "DEL":
                calculator.delete();
                break;
            case ".":
                calculator.appendDecimal();
                break;
        }
        display.textContent = calculator.getDisplay();
    });
});
