import { Calculator } from "./calculator.js";

const calculator = new Calculator();

const display = document.getElementById("calc-display");
display.textContent = calculator.getDisplay();

const buttons = document.querySelectorAll("[data-type='number']");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendDigit(parseInt(button.textContent));
        display.textContent = calculator.getDisplay();
    });
});
