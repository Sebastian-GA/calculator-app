export class Calculator {
    constructor() {
        this.memory = 0;
        this.number = ""; // number currently being entered
        this.operation = null;
    }

    appendDigit(digit) {
        if (this.number.length >= 13) {
            return;
        }
        this.number = this.number.concat(digit.toString());
    }

    add() {
        this.equals();
        this.operation = "add";
    }

    subtract() {
        this.equals();
        this.operation = "subtract";
    }

    multiply() {
        this.equals();
        this.operation = "multiply";
    }

    divide() {
        this.equals();
        this.operation = "divide";
    }

    equals() {
        if (this.memory === "ERROR") {
            // if there was an error, clear the memory
            this.memory = 0;
        }
        if (this.number === "") {
            // if there is no number, do nothing
            this.operation = null;
            return;
        }

        switch (this.operation) {
            case "add":
                this.memory += this.getNumber();
                break;
            case "subtract":
                this.memory -= this.getNumber();
                break;
            case "multiply":
                this.memory *= this.getNumber();
                break;
            case "divide":
                if (this.getNumber() == 0) {
                    this.memory = "ERROR"; // division by zero
                    break;
                }
                this.memory /= this.getNumber();
                break;
            default:
                if (this.number === "") {
                    break;
                }
                this.memory = this.getNumber();
                break;
        }
        this.number = "";
        this.operation = null;
    }

    clear() {
        this.memory = 0;
        this.number = "";
        this.operation = null;
    }

    getNumber() {
        return parseFloat(this.number);
    }

    getDisplay() {
        if (this.number === "") {
            if (this.memory.toString().length >= 14) {
                return this.memory.toExponential(5);
            }
            return this.memory;
        } else if (this.memory === "ERROR") {
            this.memory = 0;
        }
        return this.number;
    }

    delete() {
        if (this.number === "" || this.number === "0") {
            this.number = "0";
            return;
        }
        this.number = this.number.slice(0, this.number.length - 1);
        if (this.number === "") {
            this.number = "0";
        }
    }

    appendDecimal() {
        if (this.number.includes(".")) {
            return;
        }
        if (this.number === "") {
            this.number = "0";
        }
        this.number = this.number.concat(".");
    }
}
