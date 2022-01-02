import {
    Complex
} from './complex.js';


class Matrix {
    constructor(data) {
        // set rows and columns to 2
        // bloch sphere uses single qubit gates
        this.rows = 2;
        this.columns = 2;

        this.data = [];

        for (let i = 0; i < this.rows; i++) {
            this.data[i] = [];

            for (let j = 0; j < this.columns; j++) {
                if (typeof (data[i][j]) === "number") {
                    this.data[i][j] = new Complex(data[i][j], 0);
                }
                else if (data[i][j] instanceof Complex) {
                    this.data[i][j] = data[i][j];
                }
            }
        }
    }

    det() {
        let val1 = data[0][0].mul(data[1][1]);
        let val2 = data[0][1].mul(data[1][0]);

        return val1.sub(val2);
    }

    transpose() {
        let data = [];

        for (let i = 0; i < this.columns; i++) {
            data[i] = [];

            for (let j = 0; j < this.rows; j++) {
                data[i].push(this.data[i][j]);
            };
        }

        return new Matrix(this.columns, this.rows, data);
    }

    inverse() {
    }

    isUnitary() {
        return false;
    }
}

export {
    Matrix
}
