export class Calculator {
    constructor() {
        this.memory = 0;
        this.number = "0"; // number currently being entered
        this.operation = null;
    }

    appendDigit(digit) {
        if (this.number == 0) {
            this.number = digit;
        } else {
            this.number = this.number * 10 + digit;
        }
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
        if (this.number === "0") {
            // if there is no number, do nothing
            this.operation = null;
            return;
        }

        switch (this.operation) {
            case "add":
                this.memory += this.number;
                break;
            case "subtract":
                this.memory -= this.number;
                break;
            case "multiply":
                this.memory *= this.number;
                break;
            case "divide":
                if (this.number === 0) {
                    this.memory = "ERROR";
                    break;
                }
                this.memory /= this.number;
                break;
            default:
                if (this.number === "0") {
                    break;
                }
                this.memory = this.number;
                break;
        }
        this.number = "0";
        this.operation = null;
    }

    clear() {
        this.memory = 0;
        this.number = "0";
        this.operation = null;
    }

    getDisplay() {
        console.log(this.memory, this.number, this.operation);
        if (this.number === "0") {
            return this.memory;
        }
        return this.number;
    }

    delete() {
        if (this.number === 0) {
            return;
        }
        this.number = Math.floor(this.number / 10);
    }

    appendDecimal() {
        // TODO: implement
        return;
    }
}
